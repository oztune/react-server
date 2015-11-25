# React server - a tiny development react server

It works very similarly to `python -m SimpleHTTPServer` only that it precompiles `.js` and `.less` files before serving them.

## Features
- Browserifies js files
- Fast rebuilds, no restart needed
- Renders ECMA2015 syntax
- Renders `.less` files
- Serves `index.html` when no file exists to support single-page apps

## Quick set up

```
npm install -g oztune/react-server
```

```
react-server . [port]
```

Visit `localhost:3000` in the browser.

## Recommended usage within a project

First, install it as a dev dependency to avoid relying on a global package with a potentially unknown version.

```
npm install --save-dev oztune/react-server
```

Let's assume that your project structure looks something like this:

    |my-app/
    |-- package.json
    |-- src/
    |---- index.html
    |---- index.js
    |---- style.less
    
You can add this to your package.json for convenience:

    "scripts": {
        "start": "react-server ./src"
    }

Now you can start serving your app with `npm start` and pretend that you're working in an enviornment that supports the latest features. For example, assuming `index.js` is the entry point file, simply add this to your `index.html`:

    <script src="index.js"></script>
    
## Built in support for one page apps

Whenever you request a file from the server that doesn't exist (eg. `localhost:3000/some/crazy/path`) it just serves your `index.html` file, making it simple to build one page apps.
