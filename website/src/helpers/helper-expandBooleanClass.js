(function() {
	module.exports.insertClass = function(shouldInsertClass, className) {
		return shouldInsertClass && className || "";
	};

	module.exports.insertClassConditionally = function(toSatisfy1, toSatisfy2, classIfTrue, classIfFalse) {
		if (toSatisfy1 && toSatisfy2) {
			return classIfTrue;
		} else if (toSatisfy1) {
			return classIfFalse;
		} else {
			return "";
		}
	}; 
})();