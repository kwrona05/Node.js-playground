const fs = require("fs");

const requestHandler = (req, res) => {
  const url = require("url");
  const method = require("method");
  if (url == "/") {
    res.write("<html>");
    res.write("<head><title>Input</title></head>");
    res.write("<body><input type='text' /></body>");
    res.write("</html>");
  }
};

module.exports = requestHandler;
