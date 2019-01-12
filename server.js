"use strict"

var express = require('express');

var app = express();

var path = require('path');

app.use(express.static('public'));

app.listen(1234,function(){
	console.log("Application is running at 1234");
})