var express = require('express'),
    expressLess = require('express-less'),
    browserifyMiddleware = require('browserify-middleware'),
    babelify = require('babelify');

module.exports = function (staticPath) {
    var app = express();

    app.use(expressLess(staticPath));

    app.use(browserifyMiddleware(staticPath, {
        transform: [babelify.configure({
            optional: ['es7.decorators']
        })]
    }));

    app.use(express.static(staticPath));

    // Make browser history work
    app.get('*', function (req, res) {
        res.sendFile(staticPath + '/index.html');
    });

    // Print out errors as html. Not needed since
    // browserifyMiddleware does it already. May be helpful
    // If something else in the pipeline fails.
    //
    // app.use(function (err, req, res, next) {
    //     res.send(200, "document.body.innerHTML = '" + "<h1>Error in " + req.url + "</h1>" + "<code>" + JSON.stringify(err) + "</code>'");
    // });

    app.listen(3000, function () {
        console.log('Serving from ' + staticPath);
        console.log('Listening on port 3000');
    });
}