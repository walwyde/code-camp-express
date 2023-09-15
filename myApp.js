let express = require("express");
let app = express();
const dotenv = require("dotenv").config();

// console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  res.json({ message: process.env.MESSAGE_STYLE = "uppercase"? "HELLO JSON" : "Hello json" });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
