const MongoClient = require("mongodb").MongoClient;
const http = require("http");
const url = "mongodb://admin:pass@mongodb-34-centos7:27017";

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    http.createServer((req, res) => {
        console.log("here1");
        console.log(client);
        if (req.url === "/rando" && req.method === "GET") {
            console.log("here2");
            const db = client.db("admin");
            const collection = db.collection("test");
            collection.find({}).toArray((err, docs) => console.log(docs));
            res.end("donezo");
        }
    }).listen(8000);
});

