const express = require("express");

const app = express();

const importData = require("./data.json");

const  scope = require("./scope.json");
const sense = require("./sense.json");
const  select = require("./select.json");
const sce = require("./sce.json");
const  smec = require("./smec.json");

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello welcome to abhav api!");
});

app.get("/players", (req, res) => {
  res.send(importData);
});

app.get("/sense", (req, res) => {
  res.send(sense);
});
app.get("/scope", (req, res) => {
  res.send(scope);
});
app.get("/select", (req, res) => {
  res.send(select);
});
app.get("/sce", (req, res) => {
  res.send(sce);
});
app.get("/smec", (req, res) => {
  res.send(smec);
});

app.listen(port, () => {
  console.log(`Example running on port http://localhost:${port}`);
});
