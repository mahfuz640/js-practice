// let i = 1;
// let factorial = 1;
// while (i <= 10) {
//     factorial = factorial * i;
//     //console.log(i, factorial)
//     i++;
// }
// console.log(factorial)

//style of function

function fact(n) {
    let i = 1;
    let factorial = 1;
    while (i <= n) {
        factorial = factorial * i;
        //console.log(i, factorial)
        i++;
    }
    return factorial;
}
let result = fact(4)
console.log(result)