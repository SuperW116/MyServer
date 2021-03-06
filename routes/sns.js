const express = require("express");
const router = express.Router();

function logger(req, res, next) {
    console.log("logger start")
    console.log(req.body);
    console.log("baseUrl = ", req.baseUrl);
    console.log("path = ", req.path);
    console.log("ip = ", req.ip);
    next();
}

router.use(logger);

router.get("/", (req, res) => {
    res.status(200).send("SNS")
});
router.post("/", (req, res) => {
    res.status(200).send("SNS Post");
});

module.exports = router