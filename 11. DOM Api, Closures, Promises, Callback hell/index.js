//ASYNCHRONOUS JAVASCRIPT
//Js is a single threaded language, hence it only executes one command at a time
// Inorder to achieve concurrency, it uses async code 

//example of synchronous code
function sync(){
    console.log("first");
}
sync();

console.log("second");

//Output --> first, second



//example of asynchronous code
setTimeout(function(){
    console.log("third");
}, 3000);

function sync1() {
    console.log("first");
}
sync();

console.log("second");

//Output --> first,second,third





//features of Async Code
// --> clean and concise
// better error handling
// easier debugging




//*************************************************************************************************************************************************************************************************** */
// API --> Application Programming Interface 
// --> Interface --> two facilitate communication between two software components
//Read about --> get,post,put,delete





// ************************************************************************************************************************************************************************************************************

//Promises --> Either the promise gets fulfilled or it gets failed
// "The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value"

// Used for parallel execution in the background
//"Promise in an async code" means the task has to be executed in the future but the time is not decided, his task will get executed or get suspended but will parallely execute in background


// The promise has three states:
//a) pending : initial state, neither fulfilled nor rejected (like waiting in setTimeout function)
//b) resolve : meaning that the operation was completed successfully
//c) rejected : meaning that the operation failed

//There can be two input parameters inside the callback function of Promises (also called states of promise)--> resolve , reject

//Resolve --> promise fulfilled successfully
//Reject --> promise was not kept


//Syntax -->  new Promise(callback_function(resolve,reject){})

 
//Synchronous promise
let meraPromise = new Promise(function(resolve,reject){
    console.log("\n\nI am inside promise");
    resolve(1998);   //pass any value to mark it resolve
})

console.log("Pehla");

//Ouput --> I am inside promise
//          Pehla


//Asynchronous Promise
let meraPromise1 = new Promise(function(resolve,reject){
    
    setTimeout(() => {
        console.log("I am inside new promise 1");
    }, 5000);
    
    resolve(1998);   //pass any value to mark it resolve which will be passed as an object in meraPromise
})
console.log("\n\nDusra");

//Object returned -->  {<state> : value returned in that state} 
// {<fulfilled> : 1998}
//Ouput --> Dusra 
        // I am inside promise



//rejecting asynchronous Promise
let meraPromise2 = new Promise(function(resolve,reject){
    
    setTimeout(() => {
        console.log("I am inside new promise 2");
    }, 3000);
    
    reject(new Error("Error received that's why rejected"));   //while rejecting we have to pass an error by making a new Error object
})
console.log("\n\nTeesra");

//Object returned -->  {<state> : value returned in that state} 
// {<rejected> : Error: Error received that's why rejected}
//Ouput --> Dusra 
        // Teesra 
        // I am inside promise
        // I am inside promise
//Try using try-catch block when there is a rejected state in a Promise

//Thats why from now we will use more of promises in async code




//************************************************************************************************************************************************************* */
// USING OUTPUT OF A PROMISE
// The promise after execution is found on two states:-
// fulfilled and rejected

//In the fulfilled state we can apply the method:-
// then()  -->  value returned by promise when in fulfilled state
// Hence, if after a promise is fulfilled and thn we want to take an action, hence we use the then() method which tells us that the promise is fulfilled/completed


//In the rejected state we can apply the method:-
// catch()  --> handles the error

//These will be treated as synchronous functions and these values will be returned immediately by the promise


// we are retrieving a value in the function and simultaneously using it inside arrow function
// we can use the arrow function inside every other function in the same way

//for then() method
meraPromise1.then((value)=>{console.log(value);});   //prints 1998 since it was returned by the promise in resolved state


//for catch() method
meraPromise2.catch((error) => {console.log("Received an error");})






//********************************************************************************************************************************************************************************************************* */
// RETURNING BOTH RESOLVED AND REJECTED STATE'S VALUE USING THEN() METHOD ONLY
meraPromise2.then((value)=>{console.log(value)}, (error) => {console.log("Received an error")});





//********************************************************************************************************************************************************************************************************* */
// Implementing multiple promises which are dependent on the fulfillment of each other

console.log("\n\n")
let waadaa1 = new Promise(function (resolve,reject) {
    setTimeout(() => {
        console.log("setTimeout 1 started")
    }, 2000);

    resolve(1125);
})


//After waadaa1 promise is completed execute the function inside then()
// the parameter that we pass inside the arrow function or normal function will be the returned value form the promise on which then() has been applied

let output = waadaa1.then(function(value)
{
    let waadaa2 = new Promise((resolve, reject) => {
        console.log(value);   //prints 1125
        resolve("waada 2 resolved");
    })
    return waadaa2;    //since arrow function is also a function it can return some value and here it returns a promise which will be stored in a variable
})


output.then((value) => console.log(value));    // value is the returned value of waadaa2 that is "waada 2 resolved"

//OUTPUT:-





//since console.log() inside promises are synchronous hence they will be the outputted first and the returned value to be sent will not wait for the settimeOut





// ****************************************************************************************************************************************************************************************************************
// PROMISE CHAINING
// If more than 50 promises depend on each other, then what to do?
// we dont need to use 50 then()


//Here we use ASYNC-AWAIT s--> special syntax used to work with promises
//*****ASYNC function always returns a promise******
//we can make any function async

//*****AWAIT function means making a function wait till some other promise is complete

//If one of our async code is running and we want the next async code o run only after the first async call is finished then use async-await
//e.g --> relay race

// SYNTAX --> Just write async before the function  which we want to make async

async function abcd(){
    return "hrithik shaw"   
}
//it will return a fulfilled promise with the return value as "hrithik shaw"



// async function on asynchronous function 
async function utility()
{

let maharashtraMausam = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Maharashtra mei bhot garmi hai");
    }, 5000);
})

let kolkataMausam = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Kolkata is cool");
    }, 6000);
})

let mM = maharashtraMausam;
let kM = kolkataMausam;

return [mM,kM];

};

//but above still the promises are executing parallely

//hence if we want to execute them one by one then, we have to use await()

async function utility1()
{

let maharashtraMausam = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Maharashtra mei bhot garmi hai");
    }, 5000);
})

let kolkataMausam = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Kolkata is cool");
    }, 6000);
})

//just write await
let mM = await maharashtraMausam;     
let kM = await kolkataMausam;

return [mM,kM];
  
};

utility1();

//hence line 275 will not let the execution pass to next line unless it has been executed and line 275 will not let the execution pass to next line unless it has been executed






// ************************************************************************************************************************************************************
//FETCH API
// --> it helps to send or retrieve data from network services
// always returns a promise 
//always convert to json format
//search free APIs in google
// put the whole block inside async function  (Good practice)
// and always use the fetch() method with await  (Good practice)

//Syntax -->
// fetch("url")      --> get (getting the data) 
// fetch("url", {options})    --> post (sending the data)

async function utility2(){
    let content = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    let output = await content.json();     //json format
    console.log(output);           
};

utility2();

// after fetching , to see if the data is fetched, use
// .status
// .ok
// .json()
// .text()


//json --> javascript object notation
//its format is just like an object
// it is a lightweight format for storing and transporting data

//the data from api first needs to be converted to json format and then used
// type json formatter in google and paste the output of above function


//JSON syntax rules:-
// data is name/value pairs
// data is separated by commas
// curly braces hold objects
// square brackets hold arrays




//Now sometimes while fetching data, we also need to pass our credentials so that they can authenticate it is going to the correct user
// for that we use options
// inside options we make object of objects
// {
//     header: {
//          authentication : secretkey
//     }
// }





// **********************************************************************************************************************************************************************************************************
//POST --> means to send data to the API

//   async function helper()
//   {
//      let options = {
//          method : "POST",
//          body : JSON.stringify({
//              title: "Hrithik",
//              body: "Tagdi body",
//              birthyear: 2000,
//              weight: 68,
//          }),
//          headers: {
//              "Content-type" : "application/json; charset=UTF-8"
//          }
//      }

//      let content = await fetch("https://jsonplaceholder.typicode.com/posts/", options);
//      let response = content.json;
//      return response;
//   }


//    async function utility(){
//       let ans = await helper();
//         console.log(ans);
//    }

//    utility();


// JSON.stringify method is used to convert JSON object to JSON string
// by options we are sending the properties inside body field inside options to the url inside fetch()





// *****************************************************************************************************************************************************
//CLOSURES :

//JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.


// e.g --> 1

console.log("\n\nUsing Closures");

function init() {
    let name = "Mozilla";   // name is a local variable created by init

    function displayName() {
        //diplayName() is the inner function, that forms the closure
        console.log(name);     // use variable declared in parent function
    }
    displayName();
}

init();   //prints "Mozilla"


// e.g --> 2

function init1() {
    let name = "Mozilla";   // name is a local variable created by init

    function displayName() {
        //diplayName() is the inner function, that forms the closure

        let name = "Hrithik"
        console.log("\n",name);     // use variable declared in itself
    }
    displayName();
}

init1();   //prints "Hrithik"





// e.g --> 3

let naam = "Shaw"
function init2() {

    function displayName() {
        //diplayName() is the inner function, that forms the closure

        console.log("\n",naam);     // use variable declared in parent's parent
    }
    displayName();
}

init2();   //prints "Shaw"




// e.g --> 4

naam = "Shaw"
function init3() {

    function displayName() {
        //diplayName() is the inner function, that forms the closure
        {
            let naam = "Pawan";
        }
        console.log("\n",naam);     // use variable declared in parent's parent
    }
    displayName();
}

init3();   //prints "Shaw"





//Closures -->

function outer(){
    let name = "Hrithik is great";

    function inner() {
        console.log(name);
    }

    return inner;    //means returning the inner function (don't return inner() as then it will return undefined as we cslled the inner function which doesnt return anything)
}

//since the inner function is not called inside outer function hence it will not execute the inner function even if the outer function is called 

let func1 = outer();     // hence func1 will store the inner function
func1();  // calling func1 means intur calling inner();


//PROBLEM :- after the first call the outer function will destroy all its variables which are local to it, hence the name variable should get destroyed. Then, afterwards when we are calling the inner() through func1(), how is the inner function retrieving the variable name to console.log() as it already got destroyed. Hence func1() should print undefined, but it prints "Hrithik is great." How???


//SOLUTION :- through CLOSURES
//Closure is a top level entity which is defined by JS for every function which contains the function logic as well as all the data (variables , parameters) required for executing all the lines of that function
// This data stored in closure is known as lexical environment or surrounding state
// This data is stored in the form of references (address) and not copies (very important)





// e.g --> solve this as exercise

/*
function outer1()
{
    let a = 5;
    function inner1()
    {
        let a = 3;
        console.log(a);
        function inner2()
        {
            let a = 7;
            console.log(a);
            function inner3()
            {
               console.log(a) 
            }
            inner3();
        }

        inner2();
    }

    return inner1;
}

let func2 = outer1();
func2();


Output --> 3 7 7 
*/





