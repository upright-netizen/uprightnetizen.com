/*global requirejs: true */
requirejs.config({
  deps: [
    'app/app.js'
  ],
  shim: {

  },
  paths: {
    src: '../js',
    requirejs: '../bower_components/requirejs/require',
    bean: '../bower_components/bean/bean',
    bonzo: '../bower_components/bonzo/bonzo',
    qwery: '../bower_components/qwery/qwery',
    jquery: '../bower_components/jquery/dist/jquery'
  },
  packages: [

  ]
});
