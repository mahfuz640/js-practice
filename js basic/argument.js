// function addNumber(num1, num2) {
//     return num1 + num2;
// }
// var result = addNumber(3, 5);//num1=3,num2=5avabe declear kore
// console.log(result);
function addNumber(num1, num2) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num
    }
    // arguments.push(10); argument push kora jai na array ar moto
    return sum;
}
var result = addNumber(3, 5, 8, 15)
console.log(result)
    // akhane argument use korle akhane error show korbe