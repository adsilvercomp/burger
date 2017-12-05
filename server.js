
var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3335;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
//when you include javascript in your index file public/assets/javascript
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + "http://localhost:" + PORT);
});