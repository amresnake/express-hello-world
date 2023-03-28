const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.sendFile(__dirname + "/html-template/index.html"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));