var express = require('express'),
    expressLess = require('express-less'),
    browserifyMiddleware = require('browserify-middleware'),
    babelify = require('babelify');

// browserifyMiddleware.settings.mode = 'production';

module.exports = function (app, staticPath) {
    // This is just for testing.
    // It allows to conditionally include the babel polyfills
    // as a script tag instead of doing require('babel/polyfill')
    //
    // It can be made better by using our own babel-core instead of
    // babelify's
    //
    // So far I'm not using this because the requirements in
    // https://facebook.github.io/react/docs/working-with-the-browser.html#polyfills-needed-to-support-older-browsers
    // suffice.
    app.get('/polyfill.js', function (req, res) {
        res.sendfile(require.resolve('babel-core/browser-polyfill.min.js'));
    });

    app.use(expressLess(staticPath));

    app.use(browserifyMiddleware(staticPath, {
        transform: [babelify.configure({})]
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
};
