const isNegative = (number) => number < 0;

const numbers = [0, 4, -2, 7, 1];

numbers.every(isNegative); //false
numbers.some(isNegative); //true