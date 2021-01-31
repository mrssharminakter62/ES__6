// function declaretion______________________________

// function doubleIt(num) {
//     return num * 2;
// }
// const result = doubleIt(30);
//console.log(result);

// another system ___function expression___________________________

// const doubleIt = function myFun(num) {
//     return num * 2;
// }
// const result = doubleIt(10);
// console.log(result);

// same items _______new system arrow function ___single parameter________________

// const doubleIt = num => num * 2;
// const result = doubleIt(20);
// console.log(result);

// new sys __multiple parameter__arrow function______________________
const add = (x, y) => x + y;

const result = add(70, 30);
console.log(result);

// without parameter______________________

const give5 = () => 5;
const result2 = give5();
console.log(result2);

// new sys __fuction body_________________

const doMath = (x, y) => {
    const  sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result3 = doMath(5,2);
console.log(result3);
