const fibonacci = function(numberPosition) {
	numberPosition = +numberPosition;
	
	if (numberPosition < 0) {
		return 'OOPS'
	} else if (numberPosition === 0) {
		return 0;
	} else if (numberPosition === 1) {
		return 1;
	} else {
		let secondToLast = 0;
		let last = 1;
		let result;
		
		for(let i = 1; i < numberPosition; i++) {
			result = last + secondToLast;
		
			secondToLast = last;
			last = result;
		}
		
		return result;
	
	}
};

// Do not edit below this line
module.exports = fibonacci;
