const palindromes = function (str) {
  let arr = str.toUpperCase().split('');
  arr = arr.filter(symbol => /[A-Za-z0-9]/.test(symbol));
  return arr.join('') === arr.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
