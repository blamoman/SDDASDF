const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
	const myhtml = fs.readFileSync("./wowgreatcss.html");
	res.end(myhtml);
}).listen(8000);
