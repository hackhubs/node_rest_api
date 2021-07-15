const express = require("express");

const app = express();

const importData = require("./data.json");

const school = require("./schools.json");

const scope = require("./scope.json");
const sense = require("./sense.json");
const select = require("./select.json");
const sce = require("./sce.json");
const smec = require("./smec.json");

// value for stored

// Fashion
const menfashion = require("./fashion/fashionMen.json");
const womenfashion = require("./fashion/fashionWomen.json");
const kidfashion = require("./fashion/fashionKid.json");

// footwear

const menfoot = require("./Footwear/footwearMen.json");
const womenfoot = require("./Footwear/footwearWomen.json");

// Home Essential

const homeessential = require("./HomeEssential/HomeEssential.json");

// Medicine

const medicine = require("./Hospital/Medicine.json");

// beauty
const beauty = require("./beauty/Beauty.json");

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

app.get("/school", (req, res) => {
  res.send(school);
});
// store api

//fashion endpoint
app.get("/menfashion", (req, res) => {
  res.send(menfashion);
});
app.get("/womenfashion", (req, res) => {
  res.send(womenfashion);
});
app.get("/kidfashion", (req, res) => {
  res.send(kidfashion);
});
// footwear
app.get("/menfoot", (req, res) => {
  res.send(menfoot);
});
app.get("/womenfoot", (req, res) => {
  res.send(womenfoot);
});

// home essentials
app.get("/homeessential", (req, res) => {
  res.send(homeessential);
});

// Medicine
app.get("/medicine", (req, res) => {
  res.send(medicine);
});

// beauty

app.get("/beauty", (req, res) => {
  res.send(beauty);
});

app.listen(port, () => {
  console.log(`Example running on port http://localhost:${port}`);
});
