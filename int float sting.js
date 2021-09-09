//this is simply way
var number1 = 50;
var number2 = 52.6; //this is a float/decimal number 
console.log(number1 + number2);

//jodi kono shongkha string a thake take jevabe shonkhai convert korte hobe 
var number1 = 50;
var number2 = '52.6';
number2 = parseFloat(number2); //kono variable string type a thakle take number a shte jog/gun/vag/biyog korar time usekora hoi
//parseFloat float type number ar khetre use kora hoi --ar int type number thakle parseInt use kora hoi
console.log(typeof number2);
console.log(number1 + number2);


//jodi number thake kintu ami take string korte chai;
var number1 = 50;
var number2 = 52.6;
number1 = '' + number1; //number k string korte chaile
console.log(number1 + number2);


//kono float number akotre jog kora hole 
var number1 = 50.4;
var number2 = 52.55;
var total = number1 + number2;
total = total.toFixed(3) //doshmic ar por koi ghor jabe 
console.log(total);