const palindromes = item => {
	var punctuation = /[\s\.,?!]/g;
	const cleanItem = item.replace(punctuation, "").toLowerCase();
	const cleanReversed = cleanItem.split('').reverse().join('');

	if (cleanItem.localeCompare(cleanReversed) === 0) {
	  return true;
	} else {
	  return false;
	}
  };

// Do not edit below this line
module.exports = palindromes;
