const express = require("express");
const router = express.Router();
const { addPage } = require("../views");

router.get("/", (req, res, next) => {
  res.send("connected to /wiki/");
});

router.post("/", (req, res, next) => {
  res.send("got POST /wiki/");
});

router.get("/add", (req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
