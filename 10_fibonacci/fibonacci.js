const fibonacci = function(num) {
  if (+num <= 0) return 'OOPS';

  let memo;
  let curr = 1;
  let next = 1;

  for (let i = 1; i < num; i++) {
    memo = next;
    next += curr;
    curr = memo;
  }

  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
