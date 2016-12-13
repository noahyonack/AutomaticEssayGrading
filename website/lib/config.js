requirejs.config({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min'
  }
});

require([
  'jquery',
  'header',
  'home'
], 
function() {
  'use strict';
  
  for (var i = 0 ; i < arguments.length; i++) {
    if (arguments[i].hasOwnProperty('init')) {
      arguments[i].init();
    }
  }
});