#! /usr/bin/env node

var dir = process.argv[2],
    path = require('path'),
    staticPath = path.resolve(process.cwd(), dir || '');

require('./index.js')(staticPath);