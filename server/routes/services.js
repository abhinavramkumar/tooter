const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const moment = require("moment");
const { debug, info, warn, error, data } = require("../utils");
const { User, Post } = require("../models");

const conn = mongoose.createConnection("mongodb://127.0.0.1:27017/tooter");

conn.on("error", err => {
  error(data(err));
});

router.use((req, res, next) => {
  info(`Route:       ${req.baseUrl}`);
  info(`Request URL: ${req.originalUrl} | Method: ${req.method}`);
  info(`Date:        ${moment()}`);
});

router.get("/", (req, res) => {
  res.send({
    data: "apples"
  });
});

module.exports = router;
