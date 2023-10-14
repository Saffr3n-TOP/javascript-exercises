const removeFromArray = function(arr, ...rest) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (rest.includes(arr[i])) continue;
    res.push(arr[i]);
  }

  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
