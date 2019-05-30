const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    if (req.url === "/rando") {
        const toReq = {
            hostname: "sddasdf",
            port: 8000,
            path: "/rando",
            method: "GET"
        };
        const backendReq = http.request(toReq, resp => {
            let body = "";
            resp.on("data", chunk => (body += chunk));
            resp.on("end", () => res.end(body));
        });
        backendReq.end();
    } else {
        const myhtml = fs.readFileSync("./wowgreatcss.html");
        res.end(myhtml);
    }
}).listen(8000);

