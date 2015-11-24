#! /usr/bin/env node

var express = require('express'),
	dir = process.argv[2],
	port = process.argv[3] || 3000,
    path = require('path'),
    staticPath = path.resolve(process.cwd(), dir || ''),
    app = express(),
    middleware = require('./index')

middleware(app, staticPath);

app.listen(port, function () {
    console.log('Serving from ' + staticPath);
    console.log('Listening on port ' + port);
});