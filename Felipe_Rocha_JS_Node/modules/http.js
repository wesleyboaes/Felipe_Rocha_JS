const http = require("http");

const port = 8080;

const server = http.createServer((request, response) => {
  if (request.url === "/home") {
    response.writeHead(200, { "content-type": "text/html" }); // 200 = requisition OK; 400 or 500 = error
    response.end("<h1>Home Page</h1>");
  }

  if (request.url === "/users") {
    const users = [
      {
        name: "John Doe",
        email: "john@doe.com",
      },
      {
        name: "Jane Doe",
        email: "jane@doe.com",
      },
    ];
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Listening on port ${port}!`));
