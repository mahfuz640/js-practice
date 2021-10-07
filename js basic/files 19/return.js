// // function eveniy(num) {
// //     if (num % 2 == 0) {
// //         console.log('this is a even Number', num)
// //     } else {
// //         console.log('this is odd number with double', num * 2);
// //     }
// // }
// // eveniy(5)

// //function () amra jodi function k notun kono variable add kore call kori tokhon dekha jabe je function kaz korse na karon amra shekhane retrun use kori nai 
// // tai amra akhane new akta variable use kore return ar maddhome akta function k call korbo so let's go

// function evenif(n) {
//     if (n % 2 == 0) {
//         return n
//     } else {
//         console.log('this is odd number with double', n * 2);
//     }
//     return n; //akhane return use kora hoyese tai atar output amra peyese

// }
// var result = evenif(13);
// console.log('result:', result);

// //
// function evenif(n) {
//     if (n % 2 == 0) {
//         return n
//     } else {
//         return n * 2;
//     }
//     //return n; //aki kaz a duibar return use hoi na

// }

// var result = evenif(13);
// console.log('result:', result);

// //amra akhane akti return ar variable set korbo

// function eveif(n) {
//     var result
//     if (n % 2 == 0) {
//         result = n
//     } else {
//         result = resultn * 2;
//     }
//     return result;

// }

// var result = eveif(13);
// var square = result * result;
// console.log('square:', square);


// //
// function evenify(nums) {
//     for (var i = 0; i < num; i++) {
//         const num = nums[i];
//         evenify(num)
//     }
// }


// Square
function evenify(nums) {
    var result
    if (nums % 2 == 0) {
        result = nums
    } else {
        result = nums * 2
    }
    return result;
}
var result = evenify(13)
var square = result * result
console.log(square)