const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const items = require("./data.json");

app.use(morgan("tiny"));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ data: "Server running..." });
});

app.get("/items", (req, res) => {
  try {
    res.status(200).json({ data: items });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/items/:id", (req, res) => {
  try {
    const { id } = req.params;
    const item = items.find((food) => {
      return food.id === id;
    });
    if (item) {
      res.status(200).json({ data: item });
    } else {
      res.status(404).json({ error: `Item with id: ${id} not found` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
