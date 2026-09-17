import http from "http";
import { getUsers } from "./users.js";

const server = http.createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(getUsers()));
  } else if (req.url === "/api/users" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const user = JSON.parse(body);

      console.log("POST REQUEST RECEIVED");
      console.log(user);

      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(user));
    });
  } else if (req.url === "/api/users/1" && req.method === "GET") {
    res.end(
      JSON.stringify({
        msg: "single user with id 1",
      }),
    );
  } else if (req.url === "/api/users/1" && req.method === "PUT") {
    res.end(
      JSON.stringify({
        msg: "update user with id 1",
      }),
    );
  } else if (req.url === "/api/users/1" && req.method === "DELETE") {
    res.end(
      JSON.stringify({
        msg: "remove user with id 1",
      }),
    );
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server is running at 3000...");
});
