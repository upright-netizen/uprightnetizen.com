/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global define: true */
define([
  'jquery',
  'cookies'
], function ($, cookies) {
  'use strict';

  var
    cookieKey = 'color-preference',
    colorDataKey = 'colorSetting',
    colorClassPrefix = 'color-bg-',
    defaultBackgroundColor = 'red';

//
//  Private
//

  function removeBackgroundColor (el) {

    el = (el.jquery) ? el : $(el);

    // classes = el.className.split(' ').filter(function(c) {
    //   return c.lastIndexOf(prefix, 0) !== 0;
    // });

    el.removeClass(function removeColorClass (i, className) {
      var
        re = new RegExp(colorClassPrefix + '(.+)'),
        matches = re.exec(className);

      if (matches !== null) {
        return matches[0];
      }
    });
  }

  function addBackgroundColor (el, color) {
    var colorClass;
    el = (el.jquery) ? el : $(el);
    colorClass = colorClassPrefix + color;
    el.addClass(colorClass);
  }

  function changeBackgroundColor (el, color) {
    removeBackgroundColor(el);
    addBackgroundColor(el, color);
  }

  function getPreference (cookies) {
    return cookies.get(cookieKey);
  }

  function setPreference (cookies, color) {
    var expiresDate = new Date();

    // expires next month
    expiresDate.setMonth(expiresDate.getMonth() + 1);
    cookies.set(cookieKey, color, {
      expires: expiresDate
    });
  }

  function initEvents (preferences) {
    // use jquery for events
    preferences = $(preferences);

    preferences.on('click', '.gear', function gearOnClick () {
      preferences.toggleClass('show');
    });

    preferences.on('click', '.color', function colorOnClick () {
      var
        preference = $(this),
        color = preference.data(colorDataKey);
      changeBackgroundColor(document.body, color);
      setPreference(cookies, color);
    });
  }

//
// Public
//

  function init (preferences) {
    var color;

    if (!preferences) {
      // bail if we don't have a preferences gear
      return;
    }

    initEvents(preferences);
    color = getPreference(cookies);

    if (!color) {
      color = defaultBackgroundColor;
    }
    changeBackgroundColor(document.body, color);
  }

  return {
    init : init
  };

});