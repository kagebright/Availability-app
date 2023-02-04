const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const db = require("./db/db");
const bodyParser = require("body-parser");

const config = require("./config");

app.use(bodyParser.json());

app.get("/api/availabilities", (req, res) => {
  res.json(db.getAvailabilities());
});

app.post("/api/availabilities", (req, res) => {
  const availability = req.body;
  db.saveAvailability(availability);
  res.json(availability);
});

app.listen(port, () => {
  console.log(`Availability app listening at http://localhost:${port}`);
});
