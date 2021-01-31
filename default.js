// function add(num1, num2) {
//     if(num2 == undefined){
//         num2 = 0;
//     }
//     return num1 + num2;
// }
// const total = add(14);
// console.log(total);

// // second system_____________________________

// function add(num1, num2) {
//     num2 = num2 || 0;
//     return num1 + num2;
// }
// const total = add(15);
// console.log(total);

// another system______________________________________
 
function add(num1, num2 = 20) {
    return num1 + num2;
}
const total = add(16, 1);
console.log(total);
