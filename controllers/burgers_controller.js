//import express
express = require("express");
var router = express.Router();

//import burger.js
var models = require("../models/burger.js");

//create the router for the app

// Create all our routes and set up logic within those routes where required.
// selectAll()
router.get("/", function(req, res) {
    //** what is the burger in burger.all referring to?
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
// insertOne()
//** where are you posting to?
router.post("/api/cats", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
// updateOne()

cat.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });


//export the router at the end of the file
module.exports = router;