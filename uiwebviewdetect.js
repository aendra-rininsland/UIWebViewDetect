/**
 * uiwebviewdetect.js
 * 2014 Ændrew Rininsland <aendrew.rininsland@thetimes.co.uk>
 *
 * A simple script that adds the class "uiwebview" to the `<html>` element and
 * the property `uiwebview: true` to the `window` object.
 *
 * Thanks to "unceus" on Stack Overflow for the regex in this answer:
 * 	http://stackoverflow.com/a/22851632/467760
 *
 * License: MIT
 */

(function(){
  'use strict';
  var is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)/i.test(navigator.userAgent);
  if (is_uiwebview) {
    window.uiwebview = true;
    var classes = document.documentElement.className.split(' ');
    classes = classes[0] === '' ? [] : classes; // remove empty string if not found.
    classes.push('uiwebview');
    document.documentElement.className = classes.join(' ');
  }
})();
