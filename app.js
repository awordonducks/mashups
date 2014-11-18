//Set up requirements
var express = require("express");
var Request = require('request');

//Create an 'express' object
var app = express();

/*-----
ROUTES
-----*/
app.get("/", function(req, res){
	res.send("We are working!");
});

//Catch All Route
app.get("*", function(req, res){
	res.send('Sorry, nothing doing here.');
});

app.listen(3000){
	console.log("Express started on 3000, woo!");
}
