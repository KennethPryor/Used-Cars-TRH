var express = require("express");
var mongojs = require("mongojs");

var app = express();

app.use(express.static("./public"));

var databaseUrl = "internal_cars";
var collections = ["cars"];

var db = mongojs(databaseUrl, collections);

db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/", function(req, res) {
    res.sendFile("index.html" ,{ root: "html" });
});

app.get("/cars", function(req, res) {
  db.cars.find({}, function(error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});

app.listen(3000, function() {
  console.log("App running on port 3000!");
});
