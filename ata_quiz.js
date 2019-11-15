const express = require("express");

const app = express();

app.use("/SafeT360/",express.static("public"));

app.listen(3600);