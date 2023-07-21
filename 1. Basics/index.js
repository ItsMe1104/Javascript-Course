// Javascript is related to functionality and behaviour
// Animation is also a type of functioning hich can be handled by javascript
// Light weight programming language or client side scripting language
// Js was initially named as Mocha
// we can make web apps / mobile apps / network apps / CLI(command line interfac) tools / games with JS
// At first Js was only used to run in browsers
// We need JS engine to run JS as a translator which is alread installed in browser (Spider monkey in firefox, V8 in chrome) 
// Later in a C++ program called node ,Js is added  to make Node Js so that we can execute it under server side that is outside the browser
// we can inspect in browser and open console to run JS

//Client --> One who requests
// Server --> One who fulfils the request


// To print in console
console.log("Hello Jee Kaise ho saare");

// To provide alert dialogue box when the website starts or during refresh
//  alert("Hello ji kaise ho saare");

// Note: if there is alert in js file and if we try to execute it using node terminal then it will throw error hence comment it before using it
 

 // helps to print or log in console
        // Go to any browser and open console 
        console.log("Hello jee");

        // ";" used to terminate a statement 

        // Whatever is indie single or double quotes is a string (a sequence of characters)



        // Adding comments -> used to pincrease readability, the compiler doesnt exxecute it
        // --> single line comment
        /* Multi line comment*/

// Find JAVA vs JAVASCRIPT

// ***************************************************************************

// Variable --> a memory location where we can store some value
// Use let, var and const to declare a variable
// Dynamic typed language as we dont need to specify the data type while declaring
let a = 5;                  // a is variable name while 5 is value
let name = "Shaw";
let status = true;
let  = 12.5;

console.log(a);


//using var keyword to declare variables
var priti = "mukherjee";
var priti = "cse A";
var priti = 5;
//allowed to redeclare again and again within same block


// Difference between var and let
// 1) "var" has global scope hence everytime we redeclare a variable it just overwrites that value while "let" only has scope within the block its defined
// e.g

let naam = "Priti";

{
    let naam = "Hrithik";
}
console.log(naam);  // hence it prints "Priti" which is defined outside the above block


//but with var
var naam1 = "Priti";

{
    var naam1 = "Hrithik";
}

console.log(naam1);   // hence it printss "Hrithik" which is defined inside the block


//2) we cannot redeclare a let inside same block while we can redeclare var inside same block

var red = "abc";
var red = "def";
console.log(red);

let red1 = 11;
// let red1 = 15; 
// console.log(red1);   will give error


// ***********************************************************************************************************************

// Constant -> a fixed variable whose value cannot be changed
// can be declared using const instead of var or let

const abc = 123;
// cannot be redefined

// abc = 21;
// console.log(abc);    will give error

// **********************************************************************

// Rules for naming variables
// 1) cannot be a reserved keyword
// 2) should be a meaningful name
// 3) cannot start wit h a number
// 4) cannot contain space or high-fin (-)
// 5) use camelcase  --> firstName  ,  anujKumarGufta


// Declaring multiple variables using let
let abcd, def;


// *******************************************************
/* Primitive DataTypes
*) String  --> sequence of characters  ("Hrithik@ *(&%%1234")
*) Number  --> 11 or 12.5 or -12 or 0
*) Boolean --> true or false
*) Undefined  --> if we only declared a variable but not deined a value (let a;)
*) Null  -->  the variable's value is empty or null
*/

// **********************************************************
// We can redefine a variable's value which can be of a different data typewhich cannot be done in cpp or java

console.log("\n\nDynamic Typing");
console.log("\nExample - 1");
let num = 87;
console.log(num);

num = "Hrithik";
console.log(num);

console.log("\nExample - 2");
let bool = true;
console.log(bool);

bool = undefined;
console.log(bool);

// *****************************************************************
// Reference Data Types -->
/* 
1) Objects
2) Arrays
3) Functions
*/

// 1) Objects --> have properties and behaviour
// If multiple variables are linked with each other we declare them under an object

let person ={
    firstName: "Hrithik",
    age : 24,
};   // firstName, age are properties or keys

// How to access?
// a) dot notation  --> person.age
console.log(person.age);

//b) bracket notation --> person['age'];     //under quotes remember
console.log(person['age']);

// Why bracket notation?  --> discussed later


// ***************************************************************

// 2) Arrays --> Data structure used to contain a list of items (not necessarily similar items)
//Indexing is 0-based

let arr = ["Hrithik", "Priti", 23 , 24.5, true, undefined, null];
console.log(arr);


//Accessing elements of array using index
let ele = arr[0];
console.log(ele);

let ele1 = arr[1];
console.log(ele1);

let ele2 = arr[6];
console.log(ele2);

let ele_undefined = arr[7];   //will give undefined as array doesnt have a 7th index
console.log(ele_undefined);


// How to modify values of the array using index
arr[1] = "Pritiyaaa";
console.log(arr[1]);

//How to add new elements to the back of array
arr[8] = "Mukherjee";   //just add the value to an index not yet defined
// all the undefined indexes before that will be having value = undefined.
console.log(arr);
console.log(arr[7]);


//How to add the element to the end of the array
arr[9] = 1125; //just add the element to the index = to the size of the array
console.log(arr[9]);



// *****************************************************************************
// Operators
/*
a) Arithmetic 
b) Assignent
c) Comparison
d) Bitwise
e) Logical
f) Pre-Post Increment-decrement
*/

// a) Arithmetic --> + , - , * , / , % (remainder) , ** (power)
// x**y = x to the power y;
console.log("2 to the power 3 =",2**3);
// After "," by default a space appears




//f) Pre-Post Increment-decrement
// ++x;    pre increment   --> first increment the value then use the value
let v = 10;
console.log(++v);   // prints 11 , v=11


// x++;    post increment  --> first use the value then increment it
let i = 10;
console.log(i++);     // prints 10 , i =11


// --y;       pre decrement --> first decrement the value then use the value
let j = 10;
console.log(--j);     //prints 9 , j = 9


// y--;        post decrement  --> --> first use the value then decrement it
let k = 10;
console.log(k--);     //prints 10, k = 10


//Question -->

let m = 5;
let n = 10;

let ans1 = (++m) * (--n);     //ans1 = 6 * 9 = 54
let ans2 = (m++) * (--n);     //ans2 = 6 * 8 = 48
let ans3 = (m++) * (n--);     //ans3 = 7 * 8 = 56 
let ans4 = (++m) * (n--);     //ans4 = 9 * 7 = 63




// b) Assignment operator
// "=" used to assign a value

let abcde = 123;
// Note:
abcde += 2;   // abcde = abcde + 2;

abcde -= 2;   // abcde = abcde -2;

abcde /= 2;   //abcde = abcde / 2;




// c) Comparison  --> returns boolean
/*
*) > greater than        
    console.log(5 > 3);     //  true

*) < less than
    console.log(5 < 3);    //  false
    
*) >= greater equal to
    console.log(5 >= 3);   // true

*) <= less equal to 
    console.log(5 <= 3);    // false

*) == equal to equal to
    console.log(5 == 3);    // false

*) != not equal to
     console.log(5 != 3);   // true

*) === strictly equal to
     console.log(5 === 3);    // false

*) !== strictly not equal to
     console.log(5 !== 3);     //true
*/




// Loose equality (==) vs Strict equality (===)
/*
==  -->  only checks for value
===  --> checks for value as well as data type 
*/

let int = 55;
let str = '55'

console.log(int == str);    // gives true even though one is number while other is string
console.log(int === str);   // gives true



// Ternary Operator or conditional operator
// condition --> a question whose value can only be true or false
// eg. --> a > b , a !== b

// Syntax of ternary operator
// condition ? val1 : val2;      (if condition true then val1 else val2) 

let age = 16;
let stat = (age >= 18) ? "I can vote" : "I cannot vote";
console.log(stat);  // since condition is false





// Logical Operator  for multiple conditions
/*

With booleans
AND (&&) --> if all conditions is true then only true else false 
OR (||) --> if anyone condition is true then true else false
NOT (!) --> change true to false and vice versa
*/

// AND
console.log(age < 18 && age < 17);   // true
console.log(age < 18 && age < 15);   // false since age = 16

//OR
console.log(age < 14 || age < 15);   // false
console.log(age < 18 || age < 15);   //true

//NOT
console.log(!(age<18));




//Logical Operators with Non-booleans
//falsy values --> undefined, null, false, "", NaN (Not a number)
//truthy values --> anything that is not falsy


//Short-circuiting in OR and AND gate
// 1) OR -> whenever a condition is true it will not check rest of the conditions
// 2) AND -> whenever a condition is false it will not check rest of the values


// eg.
console.log(false || "hrithik");    // prints "hrithik" as "hrithik" is a truthsy value
console.log(false || 7);           // prints 7 as 7 is a truthsy value
console.log(false || 0);            // prints false as both are falsy value (Instead of false it will treat 0 as false and print 0)



console.log("hrithik" && false);   // prints false

console.log(false || 5 || 3 || 2);  // prints 5 which is an example of shortcircuiting as 5 is the first truthsy value that the OR Gate got

console.log( 5 && false && 3 && 2);   // prints false which is an example of shortcircuiting as once the And gate found false it will not check further



// Bitwise Operator
// a) Bitwise AND
// b) Bitwise OR


/*
Bits --> 0 or 1

a) Bitwise AND (&) --> if one of the bit is 0 then the o/p will be 0
b) Bitwise OR (|)  --> if any one bit is 1 the o/p will be 1

*/


let a1 = 2   // 00000010
let b1 = 3   // 00000011

console.log(a1 & b1);      //o/p --> 2
console.log(a1 | b1);      //o/p --> 3




// Operator Precedence

let c = a + b * d / c;
//Best practice is to use brackets

c = (a + (b * d)/c);
