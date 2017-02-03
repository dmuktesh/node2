// express static middleware

var express = require('express');
var path = require('path');
var app = express();

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.use(function(req, res, next){
    console.log(req);
	console.log("Inside middleware" + req.url);
    if(req.ip == '::1')
    	res.status(400).send('400 ! not permistted'+req.ip)
    else
	    next();
});

app.use(function(req, res){
    console.log(req);
	res.status(200).send('File found!')
});

app.listen(3000)


/*var express = require("express"),
	path = require("path"),
	app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));


app.use(function(req, res, next){
    console.log("inside middle ware" + req.url);
    next();
});

app.use(function(req, res){
	res.status(200).send('Hello world!')
});

app.listen(3000);*/