const removeFromArray = function (givenArray, ...elementsToRemove) {

	const resultArray = givenArray.filter(function (item) {
		return !elementsToRemove.includes(item);
	});

	return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
