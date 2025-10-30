const convertToCelsius = function (fahrenheit) {
  let convertedToCelsius = (fahrenheit - 32) * (5 / 9);
  return convertedToCelsius;
};

const convertToFahrenheit = function (celsius) {
  let convertedToFahrenheit = celsius * (9 / 5) + 32;
  return convertedToFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
