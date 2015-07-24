var express = require('express'),
    enchilada = require('enchilada'),
    expressLess = require('express-less');

module.exports = function (staticPath) {
    var app = express();

    app.use(expressLess(staticPath));

    app.use(enchilada({
    	cache: false,
    	src: staticPath,
        debug: true,
    	transforms: [
            'babelify'
        ]
    }));

    app.use(express.static(staticPath));

    // Make browser history work
    app.get('*', function (req, res) {
        res.sendFile(staticPath + '/index.html');
    });

    app.listen(3000, function () {
        console.log('Serving from ' + staticPath);
        console.log('Listening on port 3000');
    });
}