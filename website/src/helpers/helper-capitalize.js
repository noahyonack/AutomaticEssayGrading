(function() {
	module.exports.capitalize = function(str) {
		var strArray = str.split(' ');
		strArray.forEach(function(word, index) { 
			 strArray[index] = word.charAt(0).toUpperCase() + word.slice(1); 
		});
		return strArray.length === 1 ? strArray[0] : strArray.join(' ');
	};
})();