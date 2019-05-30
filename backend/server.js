const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://admin:pass@mongodb-34-centos7:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
