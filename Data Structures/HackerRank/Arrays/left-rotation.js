let originalArray = [1, 2, 3, 4, 5];

function leftRotation(originalArray) {
    let newArray = [];
    let aux = 0;
    for(let i = 0; i < originalArray.length; i++){
        aux = originalArray[i];
        console.log(aux);
        for(let j = 1; j < originalArray.length; j++){
            console.log(i)
            // originalArray[j] = originalArray[i+1];
            // originalArray[i] = aux;
            

        }
    }
    return newArray;
}

console.log(leftRotation(originalArray));
