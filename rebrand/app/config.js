/*global requirejs: true */
requirejs.config({
  deps: [
    'app/app.js'
  ],
  shim: {

  },
  paths: {
    src: '../js',
    jquery: '../bower_components/jquery/dist/jquery',
    requirejs: '../bower_components/requirejs/require',
    cookies: '../bower_components/Cookies/src/cookies'
  },
  packages: [

  ]
});
