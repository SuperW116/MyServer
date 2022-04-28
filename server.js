const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("hey")
    res.status(200).send("Hello")
});

const snsRouter = require('./routes/sns')
app.use('/sns', snsRouter)
app.listen(3000)