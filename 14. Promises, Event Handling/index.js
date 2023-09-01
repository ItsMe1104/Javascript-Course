// To ADD A CLASS to a particular element
//Use --> .classList.add("class_name")

// e.g --> 
let counter = document.querySelector("#counter");
counter.classList.add("mango");   //will add a class named "mango" to the element fetched inside counter






// **********************************************************************************************************************************************************************
// To REMOVE A CLASS to a particular element
//Use --> .classList.remove("class_name")

// e.g --> 
counter = document.querySelector("#counter");
counter.classList.remove("mango");   //will remove a class named "mango" to the element fetched inside counter





// *********************************************************************************************************************************************************************************
// PROMISES :-
// In JS , a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.
// It will always be in one of the three states :-
//pending --> neither fulfilled nor rejected, that is during waiting time
//fulfilled  --> when resolved function is called
//rejected  --> when reject function is called


//A promise is like a flight ticket, when we get the ticket we dont just fly in the plane, we wait till the time comes to sly in plane.





// ***********************************************************************************************************************************************************************************************
//Creation of promise
// To create a promise object, we se he Promise() constructor. 
//Takes a function as an argument. 
// The function also accepts two functions resolve() and reject().
//If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.


//Syntax:-
let promise = new Promise(function(resolve,reject){
    //here input arguments are in form of functions
    //do something
});




// e.g -->
const ticket = new Promise(function(resolve,reject){

    const isBoarded = false;
    if(isBoarded)
    {
        resolve("You are not in the Flight");
    }
    else{
        reject("Your flight has been cancelled");
    }
});

//above the promise will be rejected as the else block will run
//only one data can be passed inside resolve and reject function
//if multiple data needed to pass then use an array or object 


// ********************************************************************************************************************************************************************************************
//USING A PROMISE :-

// 1) then() method  --> used with the callback when the promise is successfully resolved or fulfilled

// 2) catch() method  --> used with the callback when the promise is rejected or an error occurs


// 3)finally() method  --> gets executed when the promise is either resolved successfully or rejected 





 
//Using them together

ticket   //ticket can also be replaced by a function that returns a promise
   .then((data)=>{
    console.log("wohoo",data);
   })                         //dont use ; here else we wont be able to write catch and finally functions together
   .catch((data)=>{
    console.log("oh no",data);
   })
   .finally(()=>{
    console.log("I will always be executed");
   })


//"data" used inside input parameter inside then() is the value passed in the resolve function call in the promise if the resolved function is executed

//"data" used inside input parameter inside catch() is the value passed in the reject function call in the promise if the reject function is executed

//this data can further be use in an arrow function passed as input parameter in the then() and catch() function also

//finally() will always execute no matter if the promise is resolved or rejected
//it can also be omitted 





// ******************************************************************************************************************************************************************************************
//Now let's take another example from callback hell example and add a setTimeOut() to every function


// Go to promisePizza.js file
