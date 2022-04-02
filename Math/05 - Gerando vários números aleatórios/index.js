import getRandomInt from './../03 - Inteiro Aleatório Incluso/index.js';
import fileSystem from 'fs';

const randomNumbers = [];

for(let i = 0; i < 10; i++){
    randomNumbers.push(getRandomInt(0, 100));
}

const fileContent = `const randomNumbers = [${randomNumbers.join(', ')}];\n\nexport {\n\trandomNumbers\n};`;
const fileName = 'my-random-numbers.js';


if(fileSystem.existsSync(fileName)){

    console.log(`${fileName} já existe!`);

} else{

    fileSystem.writeFile(fileName, fileContent, (err) => {
        if(err) throw err;
        console.log('arquivo criado!');
    });

}