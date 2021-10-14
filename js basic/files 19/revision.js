console.log(12);
// array
nums = [5, 23, 16, 5, 6, 51, ]
for (i = 0; i < nums.length; i++) {
    const num = nums[i];
    // odd gulo k 
    if (num % 2 == 0) {
        console.log(num, ' --Is a Even number')
    } else {
        console.log(num, ' --Is a Odd number')
    }
}
// friend age loop
friend_age = [4, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

for (let i = 0; i < friend_age.length; i++) {
    const age = friend_age[i];
    if (age % 2 == 0) {
        console.log(age, 'is even number')
    } else {
        console.log(age, 'is odd number')
    }

}

function give(num) {

    if (num % 2 == 0) {
        console.log(num, 'is even number')
    } else {
        console.log(num, 'is odd number')
    }

}
give(2)