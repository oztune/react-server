# React server - a tiny development react server

Features:
- Browserifies js files
- Uses enchilada for fast reloads
- Renders ECMA2015 syntax
- Renders `.less` files
- Serves `index.html` when no file exists to support single-page apps

## Usage:

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

## Set up

    npm install --save-dev git+https://oztune@github.com/react-server/react-server.git

In your package.json:

    "scripts": {
        "start": "react-server ./src"
    }

## Running it

    npm start