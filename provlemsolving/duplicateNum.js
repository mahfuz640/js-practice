var name = [3, 6, 2, 7, 3, 2, 3, 8, 1, 9, 11, 56]
var uniqueName = []
for (var i = 0; i < name.length; i++) {
    var element = name[i]
    var indexOf = uniqueName.indexOf(element)
    if (indexOf == -1) {
        uniqueName.push(element);
    }
}
console.log(uniqueName)