const sumAll = function (firstNumber, finalNumber) {
	if (typeof firstNumber !== "number" || typeof finalNumber !== "number") {
		return 'ERROR';
	} else if (firstNumber < 0 || finalNumber < 0) {
		return 'ERROR';
	}

	let finalResult;

	if (firstNumber > finalNumber) {
		for (finalResult = 0; finalNumber <= firstNumber; finalNumber++) {
			finalResult += finalNumber;
		}
	} else {
		for (finalResult = 0; firstNumber <= finalNumber; firstNumber++) {
			finalResult += firstNumber;
		}
	}

	return finalResult;

};

// Do not edit below this line
module.exports = sumAll;
