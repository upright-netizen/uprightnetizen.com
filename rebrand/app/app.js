/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global define: true */
define([
  'jquery',
  'cookie-monster'
], function ($, cookie) {
  'use strict';


  function removeBackgroundColor (el) {
    var
      prefix = 'color-bg-',
      classes;

    el = (el.jquery) ? el[0] : el;

    classes = el.className.split(' ').filter(function(c) {
        return c.lastIndexOf(prefix, 0) !== 0;
    });

    el.className = classes.join(' ');
  }

  function addBackgroundColor (el, color) {
    var colorClass;
    el = (el.jquery) ? el[0] : el;
    colorClass = 'color-bg-' + color;
    el.className += colorClass;
  }

  var
    preferences = $('#preferences');

  preferences.on('click', '.gear', function gearOnClick () {
    preferences.toggleClass('show');
  });

  preferences.on('click', '.color', function colorOnClick () {
    var color = $(this);
    removeBackgroundColor(document.body);
    addBackgroundColor(document.body, color.data('colorSetting'));
  });
});
