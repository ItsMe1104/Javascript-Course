//Now let's take another example from callback hell example and add a setTimeOut() to every function


function getCheese() {

     //Here we will use promises instead of callback mechanism
    //just enclose the whole block inside a promise's callback function and return it
    return new Promise((resolve,reject) =>{

        setTimeout(() => {
        
            const cheese = "🧀";

            //when he cheese will be ready after two inutes then only will it resolve as this whole function will start after 2 seconds
            resolve(cheese);

        }, 2000);
    }) 
}

console.log(getCheese());   //will return a promise in pending state 
//pending because the promise is returned immediately but the data that the promise will return through resolve or reject method is still pending because it will return data only after 2 seconds

//if we want to see resolved state then remoe the timeout abd write the logic normally

/*
function getCheese() {
    return new Promise((resolve,reject) =>{

            const cheese = "🧀";
            resolve(cheese);
    }) 
}
*/





//same like getCheese() function but just we passed an inut parameter cheese

function getDough(cheese) {
   return new Promise((resolve,reject) =>{

       setTimeout(() => {
       
           const dough = cheese + " 🫓";
           resolve(dough);

       }, 4000);
   }) 
}


//same like getCheese() function but just we passed an inut parameter dough
function bakePizza(dough) {
    return new Promise((resolve,reject) =>{
 
        setTimeout(() => {
        
            const pizza = dough + " 🍕";
            resolve(pizza);
 
        }, 2000);
    }) 
 }




//CALLING FUNCTIONS TO EXECUTE
//  --> Chaining of then() and catch()

//since getCheese() also returns promise hence we can use then() and catch() method with it using "." operator

 getCheese()
    .then((cheese)=>{
        console.log("Here is the cheese",cheese);
        return getDough(cheese);
    })     //since getCheese.then() will also return a promise that is returned from getDough() hence we can directly start then() method for getDough()
    .then((dough)=>{
        console.log("Here is the dough",dough);
        return bakePizza(dough);
    })     //since getDough.then() will also return a promise that is returned from bakePizza() hence we can directly start then() method for bakePizza()
    .then((pizza)=>{
        console.log("Here is the pizza",pizza);
    }) //Now we need to define the catch() only once for the entire execution
    //.catch() will see anywhere if we get an error then without running the functions below it will just stop the execution and print the rejected state of the function where the error occured
    //here we didnt write the reject state for any function, originally we will write both resolve and reject state in conditional statements
    .catch((data)=>{
       console.log( "Error occured" , data);
    })   //finally() will always execute
    .finally(()=>{
        console.log("Process ended");
    })


    //Note: dont write the then() separately with individual functions since the time frame is different for each function hence it will result in wrong synchronization and undefined return values

    //Hence we will find that they will execute in synchronization after specified times one by one

    //to test the catch() just replace the function of getDough() with this -->
   
    /*
    function getDough(cheese) {
   return new Promise((resolve,reject) =>{

       setTimeout(() => {
       
           const dough = cheese + " 🫓";
           reject("Cant get dough");

       }, 4000);
   }) 
}
    */





// ******************************************************************************************************************************************************************************************************************************************************
//ASYNC AND AWAIT

//instead of then() and catch() chaining we use async and await
// means till the current line executes dont go to the next line.


//ASYNC :-
//a function can be made asynchronous by just writing "async" infront of function definition


//AWAIT :-
//if a function returns a promise and has some timeout for the resolve or reject to return data, then if we equate it to a variable then,
// --> it will immediatley return a promise into the variable and not the resolved data a
// --> to make the function wait and not return promise but rather the resolved data after the time frame then we use await

//we use await before calling the function to euate it to a variable
//e.g --> const cheese = await getCheese();
//hence due to await, the current execution will wait till the current line gets the resolved value and then only goes to next line


//AT lAST :-
//call the asynchronous function like normal function call


async function orderPizza(){
    const cheese = await getCheese();
    console.log("Here is the cheese",cheese);

    const dough = await getDough(cheese);
    console.log("Here is the dough",dough);

    const pizza = await bakePizza(dough);
    console.log("Here is the pizza",pizza);
}


orderPizza();





// ***********************************************************************************************************************************************************************************************************************************
//USING ASYNC-AWAIT with the try and catch block


//if we want our execution to break the process in between just when we get a rejected state or some error
// we use try-catch blocks

//we put all the code which can give error in the try block
//we use the catch block to tell what we will do if we get an error
//the input parameter in the catch block is the rejected state value which we can use in the catch block

async function orderPizza1(){

    try{
        const cheese = await getCheese();
        console.log("Here is the cheese",cheese);

        const dough = await getDough(cheese);
        console.log("Here is the dough",dough);

        const pizza = await bakePizza(dough);
        console.log("Here is the pizza",pizza);
    }
    catch(err){
        console.log("Error occured",err);
    }

    //works like finally block
    console.log("Process Ended");
}

orderPizza1();


 //to test the catch{ } block just replace the function of getDough() with this -->
   
    /*
    function getDough(cheese) {
        return new Promise((resolve,reject) =>{

        setTimeout(() => {
       
           const dough = cheese + " 🫓";
           reject("Cant get dough");

       }, 4000);
     }) 
    }
    */