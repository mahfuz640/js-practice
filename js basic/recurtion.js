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

// recursive 
function factorialRecursive(num) {
    if (num == 1) {
        console.log()
        return 1;
    } else {
        return num * factorialRecursive(num - 1)
    }
}
var result = factorialRecursive(5)
console.log(result)