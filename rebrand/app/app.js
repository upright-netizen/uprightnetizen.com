/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global define: true */
define([
  'src/preferences'
], function (preferences) {
  'use strict';

  var
    preferencesElement = document.getElementById('preferences');

//
//  Init
//
  preferences.init(preferencesElement);
});
