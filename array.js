var age = [12, 50, 44, 66];
console.log(age);

//array ar position ber korar jonno indexOf use kora hoi
//position shobshomai bam dik diye shuru hoi 0,1,2,3
var age = [12, 50, 44, 66]
console.log(age[2]);

//amra chaile array ar position variable o rakhte pari
var age = [12, 50, 44, 66]
var num1Position = age[0];
console.log(num1Position);

//kono array ar ager position ar number na muse oy position a new number add kora
var age = [12, 50, 44, 66]
age[0] = 52;
console.log(age[0])

//amra jodi kono array ar position ber korte chai tahole indexOf use korte hobe
var age = [12, 50, 44, 66]
var num1Position = age.indexOf(50)
console.log(num1Position)

//ar jodi kono array list ar bahirer kono number ar position ber kori tokhon ta amader -1 output dekhabe
var age = [12, 50, 44, 66]
var num1Position = age.indexOf(556)
console.log(num1Position)

//.push() add kora ar kaz 
var age = [12, 50, 44, 66]
age.push(42);
console.log(age);

//array ar moddhe koita elements ase ta janar jonno .length() use kora hoi
var age = [12, 50, 44, 66]

console.log(age.length)

//.pop() bad deya ar kaz 
var age = [12, 50, 44, 66]
age.pop()
console.log(age)
    //shift
var age = ['mas', 'murgi', 'goru']
age.shift()
console.log(age)

//add kora ar kaz 
var age = ['mas', 'murgi', 'goru']
age.unshift('vaji')
console.log(age)