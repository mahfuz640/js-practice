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