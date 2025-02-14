const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  const requestHandler = (req, res) => {
    if (url === "/") {
      res.write("<html>");
      res.write("<head><title>Enter Message</title><head>");
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    }
    if (url === "/message" && method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });
      req.on("end", () => {
        //za pomocą concat() łączę wszystkie chunki i przekształcam je na string
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split("=")[1];
        //gdyby writeFile było poza req.on wywołałoby się przed req.on
        fs.writeFileSync("message.txt", message);
      });
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title><head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
  });
}

module.export = requestHandler