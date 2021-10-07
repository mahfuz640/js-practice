// function evenify(num) {
//     if (num % 2 == 0) {
//         console.log('this is a even Number', num)
//     } else {
//         console.log('this is odd number with double', num * 2);
//     }
// }
// evenify(5)

//function () amra jodi function k notun kono variable add kore call kori tokhon dekha jabe je function kaz korse na karon amra shekhane retrun use kori nai 
// tai amra akhane new akta variable use kore return ar maddhome akta function k call korbo so let's go

function evenify(n) {
    if (n % 2 == 0) {
        return n
    } else {
        console.log('this is odd number with double', n * 2);
    }
    return n;
}
var result = evenify(13);
console.log('result:', result);












//
function evenify(nums) {
    for (var i = 0; i < num; i++) {
        const num = nums[i];
        evenify(num)
    }
}