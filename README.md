# Electron starter kit

Starter Kit for Electron

## Create project
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
  
## Persists data with sqlite3 and knex
That is quite complicated...

  * You need to build sqlite3 for each platform
  * You need to exclude knex from webpack because of incompatibility

### Update package.json with scripts, dep, dev_dep...

    "rebuild": "electron-rebuild -f -w sqlite3"
    "knex": "^0.13.0",
    "electron-rebuild": "^1.5.11",
    
### Sqlite3

$ npm install

To rebuild sqlite3 for electron
  $ npm run rebuild

To install database
  $ npm run build:db

To install sample_data
  $ npm run build:sample_data

### Update webpack.config.js externals section
Adding knex related stuff inside main.js, and process it with webpack will give a bunch of errors...
See: 
https://github.com/tgriesser/knex/issues/1128
https://github.com/tgriesser/knex/issues/1518

Using Electron with webpack also cause errors
See:
https://stackoverflow.com/questions/34427446/bundle-error-using-webpack-for-electron-application-cannot-resolve-module-elec

  externals: [
    (() => {
      var IGNORES = [
        'electron',
        'knex',
        'bookshelf'
      ];
      return (context, request, callback) => {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')");
        }
        return callback();
      };
    })()
  ]
  
### Sample example to put in main.js

  var knex = require('knex')({
    client: "sqlite3",
    connection: {
      filename: "./build/database.sqlite3"
    },
    useNullAsDefault: true
  });

  let result = knex.select("one").from("tbl1");
  result.then(
    rows => console.log(rows)
  );
  
Note : db filename is related to project root, not build path!