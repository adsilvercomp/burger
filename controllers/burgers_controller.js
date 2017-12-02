//import express
express = require("express");
var router = express.Router();

//import burger.js
var burger = require("../models/burger.js");

//create the router for the app

// Create all our routes and set up logic within those routes where required.
// selectAll()
router.get("/", function (req, res) {
  //** what is the burger in burger.all referring to?
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// insertOne()
//** where are you posting to?
router.post("/", function (req, res) {
  console.log(req.body);
  burger.create([
    "burger_name", "devoured"
  ], [
      // the name in req.body.name is referring to the html input name
      req.body.name, false
    ], function (result) {
      // Send back the ID of the new quote
      res.redirect("/");
    });
});
// updateOne()

// ** What was this /api referring to in the cats activity?
router.put("/update/:id", function (req, res) {
  // **
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.devoured == 1) {
      // If no rows were changed, then the ID must not exist, so 404
      console.log("totally devoured");
    } else {
      console.log("not devoured");
    }
  });
});


//** how do I make the "eat it" submit button in the handlebars file turn devoured to true. 
//potential answer: an if statement----- if(buttonIsClicked){devoured == true?}



//export the router at the end of the file
module.exports = router;