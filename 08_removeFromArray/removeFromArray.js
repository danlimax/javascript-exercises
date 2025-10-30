const removeFromArray = function (arr, ...values) {
  const index = arr.indexOf(...values);
  arr.splice(index, 1);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
