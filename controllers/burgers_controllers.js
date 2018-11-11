var express = require('express');

var router = express.Router();

//importing burger.js to use its database functions
var burger = require('../models/burger.js');

//create the router for the app
//eport the router at the end of file

router.get("/", (req, res) => {
  burger.selectAll(function(data) {
    let handlebarsObj = {
      burgers: data
    };
    console.log(handlebarsObj);
    res.render("index", handlebarsObj);
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    //redirect to root
    res.redirect("/");
  });

});

router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    //redirect to root
    res.redirect("/");
  });
});

module.exports = router;