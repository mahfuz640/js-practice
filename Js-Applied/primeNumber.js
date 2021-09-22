function inPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'Not a prime Number';
        }
    }
    console.log('This is a prime number');
}

var result = inPrime(11)
console.log(result)