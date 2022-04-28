const express = require("express");
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.get("/", (req, res) => {
    console.log("hey")
    res.status(200).send("Hello")
});

const snsRouter = require('./routes/sns')
app.use('/sns', snsRouter)
const port = process.env.port || 80;
app.listen(port, () => {
    console.log("listening to port: ", port);
})