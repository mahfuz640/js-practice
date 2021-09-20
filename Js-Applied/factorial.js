// 5!=1*2*3*4*5
// 4!=1*2*3*4
// kromo vhabe kono shongkha ke jodi gun kora hoi tar folafol k factorial boolean

// for loop 

// factorial = 1;
// for (var i = 1; i <= 10; i++) {
//     factorial = factorial * i;
//     console.log(i, factorial);
// }

//function diye jodi factorial korte chai
function factorial(n) {
    let factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let result = factorial(5);
console.log(result);