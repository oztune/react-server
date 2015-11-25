# React server - a tiny development react server

It works very similarly to `python -m SimpleHTTPServer` only that it precompiles `.js` and `.less` files before serving them.

## Features
- Browserifies js files
- Fast rebuilds
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

```
npm install --save-dev oztune/react-server
```

Say your project structure looks like this:

    |my-app/
    |-- package.json
    |-- src/
    |---- index.html
    |---- index.js
    |---- style.less
    
Add this to your package.json for convenience:

    "scripts": {
        "start": "react-server ./src"
    }

Now you can pretend that you're working in an enviornment that supports the latest features. For example, assuming `index.js` is the entry point file, simply add this to your `index.html`:

    <script src="index.js"></script>
    
## Built in support for one page apps

Whenever you request a file from the server that doesn't exist (eg. `localhost:3000/some/crazy/path`) it just serves your `index.html` file, making it simple to build one page apps.
