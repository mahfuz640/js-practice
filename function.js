function me() {
    console.log("Md. Mahfuzur Rahman")
}

//function ar maddhome ami code ar jekhane e thaki na keno ami tokhone take call korle she hazir hobe

var a = 5
var b = 6
console.log(a * b)

me()

// kono kisu ke double kora
function double(num) {
    var result = num * 2;
    console.log(result);
}
double(50)
double(500)
double(10)
double(20)
double(30)

// namta
function namta(num) {

    var result = num * 2;
    return result;
}
// return ar jonno manta k amra var ar moddhe rekhese
var first = namta(5)
var second = namta(6)
total = first * second
console.log(total)

//var of function
function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
var additional = add(1, 2);
console.log(additional)