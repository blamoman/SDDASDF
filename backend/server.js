const MongoClient = require("mongodb").MongoClient;
const http = require("http");
const url = "mongodb://admin:pass@mongodb-34-centos7:27017/admin";

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    http.createServer((req, res) => {
        console.log(req.url);
        console.log(req.method);
        console.log(req.url === "/rando" && req.method === "GET");
        if (req.url === "/rando" && req.method === "GET") {
            console.log("here");
            try {
                const db = client.db("admin");
                const collection = db.collection("test");
                collection.find({}).toArray((err, docs) => {
                    res.end(docs);
                });
            } catch (err) {
                console.log(err);
            }
        }
    }).listen(8000);
});

