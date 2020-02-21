const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/doesthisnameevenmatter";

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true });

require("./models/Article")(mongoose);

// app.get 

app.listen(PORT, function() {
  console.log("App running on port " + PORT);
});