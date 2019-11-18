const express = require("express");

const app = express();

app.use("/ata/",express.static("public"));

app.listen(3600);