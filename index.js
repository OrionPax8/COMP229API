const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config();

const usersRouter = require("./routes/users");
const ticketsRouter = require("./routes/tickets");

const PORT = process.env.PORT || 3000;

// database setup

let DB = require('./db');

/* point mongoose to the DB URI */
mongoose.connect(DB.URI);

let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error:"));
mongoDB.once("open", () => {
  console.log("Connected to MongoDB...");
  app.listen(PORT, () => console.log("API lives on " + PORT));
});

const app = express();

app.use(express.json());

app.use("/", usersRouter);
app.use("/tickets", ticketsRouter);

