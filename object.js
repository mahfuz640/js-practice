var student = { id: 001, name: "Mahfuz", phone: 1234 };
var student2 = { id: 002, name: "Salam", phone: 4567 };
console.log(student);
console.log(student2);

//tumi ay list theke kono special item jante chao tokhon
var phoneNo = student.phone
console.log(phoneNo);

// or

var phoneNo = student["phone"];
console.log(phoneNo);

// or
var proName = 'phone'
var phoneNo = student['phone']
console.log(phoneNo);

//amra chaile kono list ar man command kore e change kore dite pare
student2.phone = 7890
console.log(student2)

// or 

student['phone'] = 52856
console.log(student)


// new kisu add korea notun kisu tokhon amra eivhabe use korte pare
student2.namaz = 'johor'
console.log(student2)