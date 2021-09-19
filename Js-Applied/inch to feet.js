function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;

}
var nanarFeet = inchToFeet(156)
console.log(nanarFeet)
var nanirFeet = inchToFeet(154)
console.log(nanirFeet)

//or
var feetList = [156, 288, 300]
var nanafeet = inchToFeet(feetList[1]);
console.log(nanafeet)