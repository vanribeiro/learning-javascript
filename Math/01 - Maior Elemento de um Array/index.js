import { randomNumbers as numbers } from './../05 - Gerando vários números aleatórios/my-random-numbers.js';

const maxNumberWithReduce = numbers.reduce((x, y) => Math.max(x, y), -Infinity);
const maxNumberWithSpreadOperator = Math.max(...numbers);
const maxNumberWithApply = Math.max.apply(null, numbers);

const maxNumberWithSortingAndAt = numbers.sort((x, y) => x - y).at(-1);

console.log(`Maior número do Array com Reduce: ${maxNumberWithReduce}`);
console.log(`Maior número do Array com Spread Operator: ${maxNumberWithSpreadOperator}`);
console.log(`Maior número do Array com Apply: ${maxNumberWithApply}`);
console.log(`Maior número do Array com Sorting e At: ${maxNumberWithSortingAndAt}`);
