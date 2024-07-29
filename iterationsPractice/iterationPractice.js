// 1) Escribe un programa que filtre los números pares de un array utilizando un bucle for y la función push().
let arrayTest = [1,2,3,5,4,6,7,4,2,3,4,22];
let pairsArray = [];
for (let i = 0; i < arrayTest.length; i++) {
    if (arrayTest[i] % 2 !== 0) {
        continue;
    }

    pairsArray.push(arrayTest[i]);
}

console.log('Array de pares filtrados: ', pairsArray);

// 2) Escribe un programa que elimine todos los números negativos de un array utilizando un bucle for y la función splice().
arrayTest = [1,2,-3,-5,4,-6,7,-4,2,-3,4,-22];
for (let i = 0; i < arrayTest.length; i++) {
    if (arrayTest[i] < 0) {
        arrayTest.splice(i,1)
        i--;
    }
}

console.log(arrayTest);

// 3) Escribe un programa que elimine todos los números impares de un array de números del 1 al 20 utilizando un bucle while y la función pop()
let longArray = [];
for (let i = 1; i <= 20; i++) {
    longArray.push(i);
}

let i = 19;
while (i >= 0) {
    if (longArray[i] % 2 !== 0) {
        let tail = longArray.slice(i + 1,longArray.length);
        let head = longArray.slice(0, i + 1);
        head.pop()

        longArray = head.concat(tail)
    }

    i--;
}

console.log(longArray)