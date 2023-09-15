let express = require("express");
let app = express();
const dotenv = require("dotenv").config();

// console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  try {
    const style = process.env.MESSAGE_STYLE;
    res.json({ message: style === "uppercase" ? "HELLO JSON" : "Hello json" });
  } catch (ex) {
    console.log(ex);
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
