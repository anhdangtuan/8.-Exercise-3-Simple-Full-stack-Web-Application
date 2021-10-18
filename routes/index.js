const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("index");
});

const data = {};

/* GET students. */
router.get("/students", function (req, res, next) {
  // const queries = req.query;
  // console.log(queries);
  res.status(200).send({ data });
});

/* GET students. */
router.get("/students/:id", function (req, res, next) {
  // const params = req.params;
  // console.log(params);
  res.status(200).send({ data });
});

module.exports = router;
