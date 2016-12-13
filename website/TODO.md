* Debounce the scrolling handlers
* Make the site responsive (just need a mobile version in addition to regular version)


Responsiveness:

* Need to figure out section % vs. vh in order to accomodate different screen sizes.

JS Concerns:

* May need to use a wrap object in the requirejs grunt task to pass in window & document into the require modules as a sanity check, etc... (https://github.com/jrburke/r.js/blob/master/build/example.build.js)
* May need to wrap concatenated JS in a self-executing function to protect global namespace

CSS:

* Replace janky floats with flex-box