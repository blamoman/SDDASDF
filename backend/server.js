const MongoClient = require('mongodb').MongoClient;
const http = require("http");
const url = "mongodb://admin:pass@mongodb-34-centos7:27017/admin";

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  http.createServer((req, res) => {
     if(req.url === "/rando" && req.method === "GET") {
console.log("here");
       const collection = db.collection('test');
       collection.find({}).toArray((err, docs) => {
         res.end(docs);
       })
     }
  }).listen(8000);
});
