const findTheOldest = function (arr) {
  return arr.reduce((prevPerson, currPerson) => {
    const prevPersonAge =
      (prevPerson.yearOfDeath || new Date().getFullYear()) -
      prevPerson.yearOfBirth;

    const currPersonAge =
      (currPerson.yearOfDeath || new Date().getFullYear()) -
      currPerson.yearOfBirth;

    return prevPersonAge > currPersonAge ? prevPerson : currPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
