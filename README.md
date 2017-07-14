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

## React & Redux & React Router 4
Add npm packages for React, Redux and React Router

Add directories and files

  * src/js/
    * configure_store.js
    * index.js
    * main.js
    * routes.js

  * src/js/actions/
    * action_types.js
    * application_actions.js
    
  * src/js/components/
    * common/
      * loading_dots.jsx
    * about_page.jsx
    * app.jsx
    * home_page.jsx
    * nav_bar.jsx
    * no_match_page.jsx
    * root.jsx

  * src/js/reducers/
    * application/
      * bootup_time_reducer.js
      * is_loading_reducer.js
    * application_reducer.js
    * index.js


## Npm scripts
They are described inside package.json.
To test, open 2 shell

  * $ npm run build:dev
  * $ npm start
  
To build application
  
  * $ npm run pack