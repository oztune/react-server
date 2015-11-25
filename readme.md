# React server - a tiny development react server

Features:
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
react-server .
```

## Recommended usage within a project

```
npm install --save-dev oztune/react-server
```

In your package.json:

    "scripts": {
        "start": "react-server ./src"
    }

Say your project structure looks like this:

    |my-app/
    |-- package.json
    |-- src/
    |---- index.html
    |---- index.js
    |---- style.less

Put this in your `index.html` file (note that `index.js` is 

    <script src="index.js"></script>

## TODO

Figure out the best way to provide production prebuilding
