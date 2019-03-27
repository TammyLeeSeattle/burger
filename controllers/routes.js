// create references to express and router
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

router.get('/', function(req, res) {
    burger.all(function(burger_data) {
        console.table(burger_data);
        res.render("index", {burger_data});
    })
}); // end of router.get

// export route so import request from server.js will work
module.exports = router; 