//require packages

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//==========================================
//tells node we creating an express route
var app = express();
//===========================================

//set up the PORT
var PORT = process.env.PORT || 3000;
//Sets up the Express app for data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//==========================================
//create routes for the server
//these routes give the server a map of how to respond when users visit these URLs
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

//start the server
app.listen(PORT, function () {
    console.log("Friend Finder App is listening on PORT:" + PORT);
});