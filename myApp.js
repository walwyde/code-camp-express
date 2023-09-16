let express = require("express");
let app = express();
const dotenv = require("dotenv").config();

// console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

app
  .route("/name")
  .get((req, res, next) => {
    console.log(req.query);
    res.json({ name: `${req.query.first} ${req.query.last}` });
  })
  .post((req, res, next) => {
    console.log(req.query);
    res.json({ name: `${req.query.first} ${req.query.last}` });
  });

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

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
