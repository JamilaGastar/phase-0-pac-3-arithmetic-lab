function add(x, y) {
    return x + y;
}

console.log(add(1, 2));

function subtract(x, y) {
    return x - y;
}

console.log(subtract(8, 4));

function multiply(x, y) {
    return x * y;
}

console.log(multiply(5, 5));

function divide(x, y) {
    return x / y;
}

console.log(divide(10, 2));

function increment(n) {
    return ++n;
}

console.log(increment(4));

function decrement(n) {
    return --n;
}

console.log(decrement(18));

function makeInt(n) {
    return parseInt(n, 10);
}

console.log(makeInt('hello'))

function preserveDecimal(n) {
    return parseFloat(n, 10);
}

console.log(preserveDecimal('hello'))