(function() {
	module.exports.times = function(num, element, className) {
    var accum = '';
    for (var i = 0; i < num; i++) {
    	var rand = (Math.floor(Math.random() * 10) + 1).toString();
  		accum += '<' + element + ' ' + 'class="' + className + "-" + rand + '"' +' ></' + element + '>';
    }
    return accum;
	};
})();