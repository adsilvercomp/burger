// import orm.js
// create the code that will call the ORM functions using burger specific input for the ORM

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var controller = require("../controllers/burgers_controller.js");


var burger = {
  all: function (cb) {
    //getting all data from the table burgers.
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  

  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  // delete: function(condition, cb) {
  //   orm.delete("cats", condition, function (res) {
  //     cb(res);
  //   });
  // }
};



// Export the database functions for the controller (catsController.js).
module.exports = burger;

//export burger.js