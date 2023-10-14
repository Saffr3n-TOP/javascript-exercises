const sumAll = function(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number' || x < 0 || y < 0) {
    return 'ERROR';
  }

  const min = x < y ? x : y;
  const max = x > y ? x : y;

  let res = 0;
  for (let i = min; i <= max; i++) {
    res += i;
  }

  return res;
};

// Do not edit below this line
module.exports = sumAll;
