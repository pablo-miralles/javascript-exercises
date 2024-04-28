const removeFromArray = function (givenArray, ...elementsToRemove) {

	const resultArray = givenArray.filter(function (item) {
		return !elementsToRemove.includes(item);
	});

	return resultArray;
};

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;
