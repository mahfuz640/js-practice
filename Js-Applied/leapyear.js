function leapyear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log("This is a leapyear")
    } else {
        console.log("This is not a leapyear")
    }
}
let typeYear = leapyear(1700) //akahe ne joto shal dibe tar output pabe
console.log(typeYear);