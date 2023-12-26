const repeatString = function (string, num) {

	if (num >= 0) {
		let repeatStringResult = "";
		for (i = 0; i < num; i++) {
			repeatStringResult += string;
		}
		return repeatStringResult;
	} else {
		return 'ERROR';
	}
};

// Do not edit below this line
module.exports = repeatString;
