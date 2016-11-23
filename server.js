var lowdb = require('lowdb');
var fileAsync = require('lowdb/lib/file-async');
var shortid = require('shortid');
var express = require('express');
var bodyParser = require('body-parser');

var db = lowdb('db.json', { storage: fileAsync });
var app = express();
var port = 3000;

app.use(bodyParser());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/lib'));
// app.use(express.static(__dirname + '/src/css'));

db.defaults({
	// any default collections (arrays)
}).value();

app.listen(port);