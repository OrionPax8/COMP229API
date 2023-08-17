const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 8080;

// database setup

let DB = require('./db');

/* point mongoose to the DB URI */
mongoose.connect(DB.URI);

let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error:"));
mongoDB.once("open", () => {
  console.log("Connected to MongoDB...");
});

const app = express();

app.use(express.json());

app.listen(PORT, () => console.log("API lives on " + PORT))