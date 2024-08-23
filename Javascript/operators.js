// Operators are used to perform operations on variables and values. 
// JavaScript supports various types of operators:


// Arithmetic Operators:

// + (Addition): a + b
let num1 = 5;
let num2 = 9;

console.log(num1+num2);
// - (Subtraction): a - b
let num3 = 71;
let num4 = 14;

console.log(num3 - num4 + num2);

// * (Multiplication): a * b
console.log(num3 * num1);

// / (Division): a / b
console.log(num4 / num2)

// % (Modulus): a % b

// ++ (Increment): a++ or ++a
let a = 10;
console.log({a});
a++;
console.log({a});

// -- (Decrement): a-- or --a
let b ;
console.log({b});


// fwfw
let C = 50;
let F; 

F = C * (9/5) + 32;
 console.log({F});

//  num5 
let num5 = 20;
console.log({num5}); 
num5+=1;
console.log({num5});

// let num1 = 20;
// num1 = num1 + 1;
// // --num1;
// num1+=6;
// console.log(num1);


// Assignment Operators:

// = (Assign): a = b
// let country = 'Nigeria';

// += (Add and assign): a += b (equivalent to a = a + b)
let favNumber = 7;
favNumber += favNumber;
// console.log({favNumber});

// -= (Subtract and assign): a -= b
favNumber -= favNumber;
// console.log({favNumber});

// *= (Multiply and assign): a *= b
favNumber *= favNumber;
// console.log({favNumber});

// /= (Divide and assign): a /= b
favNumber/=5;
// console.log({favNumber});

// %= (Modulus and assign): a %= b
favNumber %= 9.8;
// console.log({favNumber});

// let number1 = 2;
// let number2 = 3;
// let number3 = 1;
// number3 = number1 + number3;
// number3+=number1;
// number1+=2
// console.log(number3);


// Comparison Operators:

// == (Equal to): a == b
console.log(5 =="5");

// === (Strict equal to): a === b
console.log(5 ==="5");

// != (Not equal to): a != b
console.log(5 !="5");

// !== (Strict not equal to): a !== b
console.log(5 !=="5");
// > (Greater than): a > b
console.log(5 < "5");

// < (Less than): a < b
console.log(5 > "5");

// >= (Greater than or equal to): a >= b
console.log(5 >= "5");

// <= (Less than or equal to): a <= b
console.log(5 <="5");


// Logical Operators:

// && (Logical AND): a && b
console.log(12 <= 12 && 6 >= 12);

// ! (Logical NOT): !a
console.log(12 <= 12 || 6 >= 12);

// console.log(10 > 2 && (4 > 5 || 5 > 2) )