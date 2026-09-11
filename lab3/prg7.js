import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/product") {
    const stream = createReadStream("product.html", {
      encoding: "utf-8",
    });

    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end("<h1>404 - Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("prg6 is running...");
});