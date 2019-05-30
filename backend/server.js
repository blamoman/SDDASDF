const MongoClient = require("mongodb").MongoClient;
const http = require("http");
const url = "mongodb://admin:pass@mongodb-34-centos7:27017";

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    http.createServer((req, res) => {
        if (req.url === "/rando" && req.method === "GET") {
            const db = client.db("admin");
            const collection = db.collection("test");
            collection.find({}).toArray((err, docs) => {
                const toSend = docs[Math.floor(Math.random() * docs.length)].name;
                res.end(toSend);
            });
        }
    }).listen(8000);
});

