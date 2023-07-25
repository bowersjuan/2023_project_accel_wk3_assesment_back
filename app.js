const express = require("express");
const app = express();
const cors = require("cors");
const items = require("./data.json");

app.use(cors("tiny"));

app.get("/", (req, res) => {
  res.status(200).json({ data: "Server running..." });
});

app.get("/items", (req, res) => {
  try {
    res.status(200).json({ data: items });
    console.log(res);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = app;
