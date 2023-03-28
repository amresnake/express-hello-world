const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
var path = require('path');

var public = path.join(__dirname, '/html-template');
app.use(express.static(public));

app.get("/", (req, res) => res.sendFile(__dirname + "/html-template/index.html"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));