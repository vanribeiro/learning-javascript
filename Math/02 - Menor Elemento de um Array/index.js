import { randomNumbers as numbers } from './../05 - Gerando vários números aleatórios/my-random-numbers.js';

const minNumberWithSpreadOperator = Math.min(...numbers);
const minNumberWithApply = Math.min.apply(null, numbers);

const minNumberWithSortingAndAt = numbers.sort((x, y) => y - x).at(-1);

console.log(`Menor número do Array com Spread Operator: ${minNumberWithSpreadOperator}`);
console.log(`Menor número do Array com Apply: ${minNumberWithApply}`);
console.log(`Menor número do Array com Sorting e At: ${minNumberWithSortingAndAt}`);
