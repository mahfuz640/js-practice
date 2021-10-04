// 5 != 1 * 2 * 3 * 4 * 5

function factorial(n) {
    var fact = 1; //akhane fact ar man gulo store korbe
    for (var i = 1; i <= n; i++) {
        fact = fact * i //fact =fact+i
    }
    return fact
}
var result = factorial(5)
console.log(result)