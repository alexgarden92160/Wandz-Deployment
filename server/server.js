const express = require('express');
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const firebase = require("./firebase-setting")

app.use(bodyParser.json());
app.use(cors())

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})

app.get("/", (req, res) => {
    res.send("Server Instance V2");
})

app.get("/test", (req, res) => {

    db.query(login, (err, result) => {
        if (err)
            res.status(401).send("Test failed: " + err.message);
        else
            res.send(result);
    })
})