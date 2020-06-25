// // helloWorld function
function helloWorld() {
    return "Hello, World!";
}

// function expression syntax (assigning an anonymous function to a variable)
// const helloWorld = function() {
//     return "Hello, World!";
// }git

// // sayHello function
let sayHello  = function (name) {
    if (typeof name === 'string' && name.length > 0 && isNaN(Number(name))) {
        return "Hello, " + name + "!";
    } else {
        return "Hello, World!";
    }
}

// // isFive function
let isFive = function (input) {
    return(input == 5);
}

// // isEven function
let isEven = function (input) {
    if (typeof input === 'number' || typeof input === 'string') {
        let num = Number(input);
        return num % 2 === 0;
    } else {
        return false;
    }
}

// // isVowel function
let isVowel = function (input) {
    let vowels = 'aeiou';
    return (typeof input === 'string' && vowels.indexOf(input.toLowerCase()) !== -1);
}

// // add function
let add = function(x, y) {
    let numX = Number(x);
    let numY = Number(y);
    if(numX && numY) {
        return numX + numY;
    } else {
        return NaN;
    }
}