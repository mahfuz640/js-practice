// swap diye amra kono variable ar man olot palot korte pari
// rule :1
var a = 5
var b = 10
console.log("before swap :a=", a, "b=", b)
var temp = a;
a = b;
b = temp;
console.log('after swap:a=', a, "b=", b)

// rules:2 with out extra variable
var x = 5
var y = 7
console.log('before swap:x=', x, "y=", y)
x = x + y
y = x - y
x = x - y
console.log('after swap:x=', x, "y=", y)

//rules 3 Array ar niyome swap 
var p = 5
var q = 8
console.log('before swap:p=', p, "q=", q);
[p, q] = [q, p]
console.log('after swap:p=', p, "q=", q)