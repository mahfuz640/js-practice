function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + (n - 2)
    }

}
var result = fibonacci(8)
console.log(result)