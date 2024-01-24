const sum = (a, b) => a + b;
const numberRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const numbers = [5, 10, 15, 20, 25];

// # MAP
// * Il return del map deve essere il valore modificato!
const doubledNumbers = numbers.map((number) => number * 2);

// # FILTER
// * Il return del filter deve essere un valore booleano!
const evenNumbers = numbers.filter((number) => number % 2 == 0);

console.log(numbers);
console.log(doubledNumbers);
console.log(evenNumbers);
