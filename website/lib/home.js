define(['jquery'], function($) {
  'use strict';
  
  var Home = {
    init: function() {
      this.bindEventHandlers();
      // this.animateSublime();
    },
    bindEventHandlers: function() {
      $('.down-arrow').on('click', function() {
        $('html, body').animate({scrollTop: $("#intro").offset().top}, 500);
      });

      $('.file-list-item').on('click', function(evt) {
        $('.file-list').children().removeClass('selected');
        $(evt.target).parent().addClass('selected');
        $('.single-file').children().toArray().forEach(function(line, index) {
          $(line).css({
            "backgroundColor": this.constants.codeColors[Math.floor(Math.random() * this.constants.codeColors.length)],
            "width": 50 + Math.random() * 125
          });
        }.bind(this));
      }.bind(this));
    },
    animateSublime: function() {
      var files = $('.file-list-item').toArray()
      setInterval(function() {
        files[Math.floor(Math.random() * files.length)].click();
      }, 1000);
    },
    constants: {
      codeColors: ["#3C7090", "#889043", "#B94B05", "#771056", "#71828C", "#72FF06", "#FDB411", "#D71905", "#B38C15"]
    }
  }
  return Home;
});