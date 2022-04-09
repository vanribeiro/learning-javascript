import getRandomInt from './../03 - Inteiro Aleatório Incluso/index.js';
import { geradorNome } from 'gerador-nome';
import fileSystem from 'fs';

const participants = [];

for(let i = 0; i < 10; i++){
    participants.push({
        nome: geradorNome(),
        pontos: getRandomInt(0, 100)
    });
}

const fileContent = `const participates = ${JSON.stringify(participants)};\n\nexport {\n\trandomNumbers\n};`;
const fileName = 'participants.js';


if(fileSystem.existsSync(fileName)){

    console.log(`${fileName} já existe!`);

} else{

    fileSystem.writeFile(fileName, fileContent, (err) => {
        if(err) throw err;
        console.log('arquivo criado!');
    });

}