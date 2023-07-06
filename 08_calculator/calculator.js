const add = function(firstNum, secondNum) {
	return firstNum + secondNum; 
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(array) {
  let sum = 0;

  for (let index = 0; index <= array.length -1; index++){
    sum += array[index];
  }
	return sum; 
};

const multiply = function(...numbers) {
  let product = 1;
  for (const number of numbers){
    product = product * number;
  }
  return product;
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(number) {
	let total = 1; 
  while(number>1){
    total *= number;
    number--;
  }
  return total;
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
