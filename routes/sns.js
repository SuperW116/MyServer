const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("sns")
    res.status(200).send("SNS")
});
router.post("/", (req, res) => {
    console.log("sns")
    res.status(200).send("SNS Post")
});

module.exports = router