const reverseString = function (word) {

	let string = word.split("");
	string = string.reverse();
	string = string.join("");

	return string;

};

// Do not edit below this line
module.exports = reverseString;
