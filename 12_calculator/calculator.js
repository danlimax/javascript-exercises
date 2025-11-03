const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let total = 0;
  arr.map((itens) => {
    total += itens;
  });

  return total;
};

const multiply = function (arr) {
  let total = 0;
  let multiplies = arr.reduce((a, b) => {
    return a * b;
  });
  total = multiplies;

  return total;
};

const power = function (base, expo) {
  return base ** expo;
};

const factorial = function (num) {
  let fibonacci = 1;
  for (let i = num; i > 0; i--) {
    fibonacci *= i;
  }

  return fibonacci;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
