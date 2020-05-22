let originalArray = [1, 4, 3, 2];

function reverseArray(originalArray) {
    let reversed = []
    for(let i = originalArray.length - 1, j = 0; i >= 0 ; i--, j++){
        reversed[j] = originalArray[i];
    }
    return reversed.toString().split(',').join(' ');
}

console.log(reverseArray(originalArray));