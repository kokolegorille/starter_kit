# Electron starter kit

Starter Kit for Electron

## 
$ mkdir starter_kit
$ cd starter_kit

$ mkdir -p src/js/config
$ mkdir src/css
$ mkdir build
$ touch README.md

Add the following files

  * build/index.html
  * src/css/app.css
  * src/js/main.js
  * src/js/index.js
  * src/js/config/

Note : 
Put any config files that should not be persisted into repo inside js/config.
eg: firebase_config.js

## Npm
$ npm init -y

Edit package.json

$ npm install

## Git
Edit .gitignore

```text
npm-debug.log
/node_modules
/build/*.js
/build/*.css
/src/js/config/*
```

$ git init
$ git add .
$ git commit -m "Initial commit"

## Webpack
Edit vim webpack.config.js

## React & Redux

## React Router 4

## Npm scripts
They are described inside package.json.
To test, open 2 shell

  * $ npm run build:dev
  * $ npm start
  
To build application
  
  * $ npm run pack