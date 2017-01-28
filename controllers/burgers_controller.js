var express = require("express");

 var burger = require("../models/burger.js");


//create the router for the app
var router = express.Router();
// and export the router

router.get('/' , function(req,res){
	burger.all(function(data){
    var hbsObj = {
      burgers : data
    };
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
})

//to insert new burger into the database

router.post("/", function(req, res) {
  burger.create([
    "burger_name"], [req.body.burger_name], function() {
    res.redirect("/");
  });
});


router.put("/update/:id", function(req, res){
  var condition = "id = " + req.params.id;
  console.log(condition);

  burger.update({
    devoured : req.body.devoured
  }, condition, function(){
    res.redirect("/");
  })
});

module.exports = router;
