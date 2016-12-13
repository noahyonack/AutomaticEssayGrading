define(['jquery'], function($) {
  'use strict';
  
  var Header = {
    init: function() {
      this.bindEventHandlers();
    },
    bindEventHandlers: function() {
    	$('.nav-list-item-link').on('click', this.helpers.scrollToSection);
      // $(window).on('scroll', $.debounce(this.helpers.monitorScroll.bind(this), 20));
      // TODO: this needs debouncing
      $(window).on('scroll', this.helpers.monitorScroll.bind(this));
    },
    helpers: {
      scrollToSection: function(evt) {
        evt.preventDefault();
        var top = $('#' + evt.target.text.toLowerCase()).offset().top;
        $('html, body').animate({scrollTop: top}, 500);
      },
      monitorScroll: function(evt) {
        var ranges = this.constants.sectionHeightRanges;
        var pos = $(window).scrollTop();
        for (var range in ranges) {
          if (ranges.hasOwnProperty(range)) {
            range = range.split(',').map(Number);
            if (range[0] < pos && pos < range[1]) {
              $('.nav-list-item-link').removeClass('selected');
              $('.nav-list-item #' + ranges[range] + '-link').addClass('selected');
            }
          }
        }
      }
    },
    constants: {
      sectionHeightRanges: (function() {
        var ranges = {};
        var sectionNames = ['home', 'intro', 'data', 'exploration', 'model', 'future'];
        // var sectionNames = ['home', 'intro'];
        
        sectionNames.forEach(function(name, index) {
          var top = $('#' + name).offset().top - 200;
          var bottom = top + $('#' + name).height();
          ranges[[top, bottom]] = name;
        });

        return ranges
      })()
    }
  }
  return Header;
});