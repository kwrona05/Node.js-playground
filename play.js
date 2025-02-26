const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  req.data;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter a message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><butto'
    );
    res.write("</html>");
  }
});
