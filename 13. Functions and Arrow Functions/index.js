//Function expression --> putting entire function in an expression
//here there is no function name as there will be an anonymous function.
//The above is the main difference between function expression and function declaration

const abc = function (x,y) {
    return x+y;
}
abc(2,3);

//Hoisting doesnt happen on function expressions hence we should always call the function after we have defined it else it will give error





// **************************************************************************************************************
// Nested Functions
// In Js, we nest a function within another function. The nested (inner) function is private to its containing (outer) function.
//Hence we cannot directly call inner function 
//Dont write anycode after return statement (except when inside if condition) else it would not execute

function addSquares(a,b) {
    
    function square(x) {
        return x * x;
    }

    return square(a) + square(b);
}

const a = addSquares(2,3);   //returns 13
const b = addSquares(3,4)    //returns 25

// square(4) will give error since it is an inner function







// **************************************************************************************************************************************************************
// ARROW FUNCTIONS 
// It was introduced in ES6 version of Javascript
// It allows to create functions in a cleaner way compared to regular functions.
// We need to always assign it inside a variable


//Syntax (4 syntaxes)

/*
a)

() => expression

*/
// *****************************************
/*
b)

(param1, paramN) => expression

*/
// ****************************************
/*
c)

() => {
    statements
}

*/
// *****************************************
/*
d)

(param1,paramN) => {
    statements
}

*/


// e.g -->

//Normal Function
function greet() {
    console.log("\n\nHello World from normal function");    
}
greet();


//Arrow Function
let greet1 = () =>{
    console.log("\nHello World from arrow function");
}
greet1();




//e.g -->

//Normal Function
function counting(count) {
    console.log("\n\nCounting from normal function");
    for (let i = 0; i < count; i++) {
        console.log(i);
    }   
}
counting(5);


//Arrow Function
let counting1 = (count) =>{
    console.log("\nHello World from arrow function");
    for (let i = 0; i < count; i++) {
        console.log(i);
    } 
}
counting1(5);




// e.g -->

//Normal Function
function cube(n) {
    console.log("\n\nCube from normal function -->",n*n*n);    
}
cube(2);


//Arrow Function
console.log("\nCube from arrow function");
let cube1 = (n) => n*n*n;     //only expression allowed and no return

console.log(cube1(2));





// ******************************************************************************************************************************************************
//CALLBACK FUNCTIONS
//A callback is a function passed as an argument to another function
// when we pass a function as a parameter to another function , the passed function is called callback function
// Remember that the function is passed and not called as a parameter to another function 
//while passing --> only name of the function
//while calling --> name of the function with braces 



const calculate = (a,b, operation) =>{

    return operation(a,b);
}
//here operation is the callback function


//one way --> declaring function as argument
const addition = calculate(3,4, function (num1,num2){
    return num1 + num2;
});
console.log("\n\nUsing callback function: --> addition =",addition);



//second way
//declaring arrow function beforehand and just passing it
const subtraction = (a,b) => a-b;
const  subResult = calculate(8,3, subtraction);
console.log("Using callback function: --> subtraction =",subResult);



//third way
//declaring function beforehand and just passing it
const multiplication = function(a,b){
    return a*b;
};
const  mulResult = calculate(11,25, multiplication);
console.log("Using callback function: --> subtraction =",mulResult);

//Hence using callback function we can pass any function inside any function which matches the no. of arguments of callback function





//************************************************************************************************************************************************************************************** */
//USE OF CALLBACK FUNCTIONS -->

//in predicate functions --> where the function is applied to every element of the array individually
//find(), findIndex(), forEach(), map(), filter(), every(), some()

const arr = [4,1,6,-2,-5,3,2,-8,6,7];

//first we need to create a test function
// which we want to test on all our array elements individually and present a boolean value which is expected by functions like find(), findIndex();

// find() --> gives the first element which is passed true by the test function
// findIndex() --> gives the first element's index which is passed true by the test function


//test function --> to find negative element
const firstNeg= (num) =>{
    return num < 0;
}
//num in parameter will get the value of each element of array individually one by one


//using find()
const neg_result = arr.find(firstNeg);
console.log("\n\nFirst negative element:",neg_result);


//usinf findIndex()
const neg_ind_result = arr.findIndex(firstNeg);
console.log("\n\nFirst negative element's index:",neg_ind_result);




//Using forEach() with predicate function
// here we have to pass callback function inside forEach()
// by default the first argument is element one by one and the second argument is index one by one

arr.forEach((num,i) =>{
    if(num < 0)
    console.log("Negative no. -->",num,"at index =", i);
})





//********************************************************************************************************************************************************************************************************* */
//CALLBACK HELL

// setTimeout() is an synchronous function, meaning that the timer function will not pause the execution of other functions in the function's stack.
// It can be used to build a login popup to appear in a website after some seconds

console.log("\n\n\nAbit about setTimeout()");
console.log('Hello');
setTimeout(() =>{
    console.log("This will execute later.");
}, 9000);
console.log('World');



// Something about callbacks
//Whenever we enter our info in a website, there is a loader that comes for sometime when a call has been made to the backend, and after that the data comes
//How the frontend comes to know that the data has come from backend? ---> using callbacks


// let say we take two seconds to get cheese from fridge
function getCheeseeee() {
    setTimeout(() => {
        const cheese = "🧀";
        console.log("Here is cheese", cheese);
        return cheese;
    }, 2000);
}
//The above function will not return cheese if called since the cheese will be returned after 2 seconds asynchronously and not immediately and synchronously
// As a result when we call it the function will return its default return value that is "UNDEFINED". 
//Then when the call stack is empty, the asynchronous function will run

// e.g -->
console.log("\n\n",getCheeseeee());



//Hence to avoid the above problem and make both the synchronous and asynchronous parts to work together, we use callbacks
// remove the return and provide callback as a function parameter and call that callback function with the required variable as an argument inside the setTimeout(). Lter on dfine that callback function
//e.g --> 

function getCheesee(callback) {
    setTimeout(() => {
        const cheese = "🧀"
        console.log("\n\n\nCallbacks -->");
        console.log("Here is cheese",cheese);
        callback(cheese);
    }, 2000);
}

//can also be defined while passing as argument
var callback = function (cheese) {
    console.log("Got the cheese",cheese);
}

getCheesee(callback);






// CALLBACK HELL --> when asynchronous functions are dependent upon each other

// e.g -->
//pizza --> dough --> cheese

// hence first get cheese then dough and then pizza

//Step 1:- getting cheese
function getCheese(callback) {
    setTimeout(() => {
        console.log("\n\n\nCallback Hell -->\npizza --> dough --> cheese");
        const cheese = "🧀";
        console.log("Here is cheese", cheese);
        callback(cheese);
    }, 2000);
}

/*

//defining callback function while passing as parameter
getCheese(function(cheese){
    console.log("Got the cheese",cheese);
});
*/



//Step 2:- making dough
// pass cheese as we need it 
function makeDough(cheese,callback) {
    setTimeout(() => {
        
        const dough = cheese +  " 🫓";
        console.log("Here is dough", dough);

        callback(dough);
    }, 2000);
}


/*
//get callback inside callback because we need to pass 
getCheese(function(cheese){
   
    //defining callback function while passing as parameter as an arrow function
    makeDough(cheese, (dough)=>{
        console.log("Got my dough", dough);
    })
});
*/


//Step 3 :- Baking Pizza
// pass cheese as we need it

function bakePizza(dough, callback) {
    
    setTimeout(() => {
        
        const pizza = dough + " 🍕";
        console.log("Here is pizza", pizza);

        callback(pizza);
    }, 2000);
}

//getting callbacks inside callbacks
getCheese(function(cheese){

    makeDough(cheese, (dough)=>{

        bakePizza(dough,(pizza)=>{
            console.log("Got my pizza", pizza);
        })
    })
})


// Due to asynchronous function which needs to tell the synchronous calls that the work is completed, we used callbacks inside callbacks forming chains which is difficult to read and debug, hence this chaining is called CALLBACK HELL, which we need to avoid by using promises.