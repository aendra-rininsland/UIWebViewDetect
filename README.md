# UIWebViewDetect.js
## 2014 Ændrew Rininsland
### License: MIT

This simple script detects whether a page is being loaded in a UIKit WebUIView
window, and if so, adds "uiwebview" as a class to the HTML element, as well as
adds `uiwebview: true` to the `window` global object.

Thanks to "unceus" on Stack Overflow for the regex in this [answer](http://stackoverflow.com/a/22851632/467760).
