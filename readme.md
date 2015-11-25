# React server - a tiny development react server

Features:
- Browserifies js files
- Fast rebuilds
- Renders ECMA2015 syntax
- Renders `.less` files
- Serves `index.html` when no file exists to support single-page apps

## Set up

    npm install --save-dev oztune/react-server

In your package.json:

    "scripts": {
        "start": "react-server ./src"
    }

## Usage:

- The server tries to be as unopinionated as possible. The only requirement is that the folder you pass as the root has an `index.html` file inside.

Say your project structure looks like this:

    |my-app/
    |-- package.json
    |-- src/
    |---- index.html
    |---- index.js
    |---- style.less

> Note that react-server doesn't make any assumptions about your file structure. It only requires that an index.html file exist at the root of the folder it's serving.

And your index.html has:

    <script src="index.js"></script>

## TODO

Figure out the best way to provide production prebuilding
