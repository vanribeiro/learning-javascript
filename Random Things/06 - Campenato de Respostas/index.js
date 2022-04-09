import { participants } from './participants.js';

const firstPlace = participants.reduce((x, y) => x.pontos > y.pontos ? x : y);
const lastPlace = participants.reduce((x, y) => x.pontos < y.pontos ? x : y);

console.log(`Primeiro lugar: ${JSON.stringify(firstPlace.nome)}`);
console.log(`Último lugar: ${JSON.stringify(lastPlace.nome)}`);