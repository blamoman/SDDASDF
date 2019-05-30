const MongoClient = require('mongodb').MongoClient;
const http = require("http");
const url = "mongodb://admin:pass@mongodb-34-centos7:27017/admin";

MongoClient.connect(url, { useNewUrlParser: true } (err, db) => {
  http.createServer((req, res) => {
     if(req.path === "/rando" && req.method === "GET") {
       const collection = db.collection('test');
       collection.find({}).toArray((err, docs) => {
         console.log(docs);
       })
     }
  });
});
