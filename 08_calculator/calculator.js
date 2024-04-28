const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce( (total, item) => {
    return total += item;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce( (total, item) => {
    return total *= item;
  }, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(number) {

  if(number === 0) {
    return 1;
  }

	const arrayFromNumber = [];
  for(let i = number; i > 0; i--) {
    arrayFromNumber.push(i);
  }

  return arrayFromNumber.reduce( (total, item) => {
    return total *= item;
  });

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
