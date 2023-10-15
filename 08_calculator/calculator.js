const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let res = 0;
  arr.forEach(num => (res += num));
  return res;
};

const multiply = function(arr) {
  if (!arr.length) return 0;
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res *= arr[i]
  }
  return res;
};

const power = function(num, pow) {
	let res = num;
  for (let i = 1; i < pow; i++) {
    res *= num;
  }
  return res;
};

const factorial = function(num) {
	let res = 1;
  if (num === 0) return res;
  for (let i = 1; i < num; i++) {
    res *= i + 1;
  }
  return res;
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
