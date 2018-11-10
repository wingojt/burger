var express = require('express');

var router = express.Router();

//importing burger.js to use its database functions
var burger = require('../models/burger.js');

//create the router for the app
//eport the router at the end of file

router.get("/", (req, res) => {

  burger.selectAll((result) => {
    let handlebarsObj = {
      burgers: result
    };
    console.log(handlebarsObj);
    res.render("index", handlebarsObj);
  });
});

router.put("/:id", (req, res) => {
  let burger_id = req.params.id;

  burger.updateOne(burger_id, (result) => {
    //redirect to root
    res.redirect("/")
  });

});

router.post("/", (req, res) => {
  let burgerName = req.body.burger_name;

  burger.insertOne(burgerName, (result) => {
    //redirect to root
    res.redirect("/");
  });
});

module.exports = router;