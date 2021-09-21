// 0!=0*1
// 2!=1*2
// 3!=1*2*3
// 4!=1*2*3*4
// 5!=1*2*3*4*5
// 6!=1*2*3*4*5*6
//6!=(6-1)!*6
//n!=(n-1)!*n

// jodi loop use kore recursive factorial ber kori tahole for ar jonno
// for (var i = 10; i >= 1, i--) {

// }
// //while use kora holes
// var i = 10
// while (i >= 1) {

// }

// function call kore kora hoi tahole 
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}

var result = factorial(5)
console.log(result)