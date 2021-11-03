// for backup 
// function add(num1, num2) {
//     return num1 + num2;
// }
// const total = add(15, 17);
// console.log(total);

// jodi 17 dite jodi bhule deya na hoto tokhon tokhon

// function add(num1, num2) {
//     if (num2 == undefined) {
//         num2 = 0;

//     }
//     return num1 + num2;
// }
// const total = add(15);
// console.log(total);


// shortcut way---> num2 ar value 20 hoye jabe 


function add(num1, num2) {
    num2 = num2 || 20;
    return num1 + num2;
}
const total = add(15)
console.log(total);