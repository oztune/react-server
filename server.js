#! /usr/bin/env node

var express = require('express'),
	dir = process.argv[2],
    path = require('path'),
    staticPath = path.resolve(process.cwd(), dir || ''),
    app = express(),
    middleware = require('./')

middleware(app, staticPath);

app.listen(3000, function () {
    console.log('Serving from ' + staticPath);
    console.log('Listening on port 3000');
});