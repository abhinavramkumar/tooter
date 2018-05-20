const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const schema = mongoose.Schema;
/**
 * Test Schema and Model
 */
let testSchema = new schema({
  name: String,
  description: String
});

let Test = mongoose.model("Test", testSchema);

// End Test Section

var User = mongoose.model("User", {
  displayName: String,
  uid: String,
  photoURL: String,
  email: String,
  phoneNumber: String
});

const dbName = "tooter";
const conn = mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);
const db = mongoose.connection;

db.on("error", err => {
  console.log(err);
});

db.once("open", () => {
  console.log("Connection Successful");
});

router.get("/", (req, res) => {
  let test = new Test({
    name: "asoka",
    description: "king"
  });
  test.save(err => err && console.log(err));

  Test.find((err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
