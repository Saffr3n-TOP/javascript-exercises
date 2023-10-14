const reverseString = function(str) {
  const arr = str.split('');
  arr.sort(() => -1);
  return arr.join('');
};

// Do not edit below this line
module.exports = reverseString;
