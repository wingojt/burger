var express = require('express');

var bodyParser = require("body-parser");

var methodOverride = require("method-override");

var PORT = process.env.PORT || 8800;

var app = express();

//serving static content for the app from the "public" directory
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false}));

app.use(methodOverride("_method"));

//set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes and give the server access to them
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});