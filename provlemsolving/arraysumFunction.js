function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var elements = numbers[i]
        sum = sum + elements
    }
    return sum;
}
var numbers = [45, 65, 78, 12, 3, 54, 66]
var result = getArraySum(numbers)
console.log(result)

//aki function a alada variable use kora reusing
var total = getArraySum([45, 99, 44, 75, 12, 85])
console.log(total)