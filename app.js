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


//SERVER START

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + port )
});