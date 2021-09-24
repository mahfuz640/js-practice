// array ar moddhe theke hieghts mark ber kora
var marks = [45, 81, 96, 55, 45, 22, 55];
var max = marks[0]
for (var i = 0; i < marks.length; i++) {
    var elements = marks[i]
    if (elements > max) {
        max = elements
    }
}
console.log("this is hieghts number:", max)