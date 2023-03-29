let numbers = [1, 2, 3, 4, 5, 6]

function sum(...x) {
    return  x.reduce((a, b) => a + b);
}

console.log(sum(...numbers));