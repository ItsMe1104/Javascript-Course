//Error parts :-

// Uncaught ReferenceError: age is not defined at script.js:1:13

//Uncaught --> means error is not caught
//ReferenceError --> type of error
//age is not defined --> error message
//at script.js  --> file in which error occured
//:1  --> 1st line
//:13  --> 13th character


//It is important to catch the error else uncaught error doesnt let the lines below to execute as it gets immediately terminated






// ***************************************************************************************************************************************************************************************************************************************************************************************************
// TRY AND CATCH BLOCK 

// The main code where we can get an error is inside the `try` block. While executing the `try` block, if any error occurs, it goes to the `catch` block. The `catch` block handles the errors as per the catch statements.
// If no error occurs, the code inside the `try` block is executed and the `catch` block is skipped.
//In the catch block we have an error object as input parameter which can give info regarding the error


// Syntax:-

try {
    // body of try
}
catch(error) {
    // body of catch
}


//Benefits :-
// EVen if we get an error and we catch it in the catch block, still the code written below and outside the catch block will execute


try{
    console.log(age);    //this line will give error as age is not defined
}
catch(err){

    //we can use .name property of error object to get the name of error
    console.log(err.name);     //reference error

    //we can use .message property of error object to get the error message
    console.log(err.message);       //error is not defined
}

const a = 2 * 4;
console.log("Important as it is executed", a);







// *******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
// THROW KEYWORD -->

//used to pass custom error object or new ERROR as input parameter in the catch lock  
//used in try block only
//used with conditionals


//throwing custom error object
try{

    const res = prompt("Are you a Robot?");
    if(res == "Y")
    {
        throw {
            f_name : "Hrithik",
            l_name : "Shaw",
            age : 25
        }
    }
}
catch(err){
    console.log("Custom Error Object",err); 
}




//throwing custom new Error
try{

    const res = prompt("Are you a Robot?");
    if(res == "Y")
    {
        throw new Error("Robot found")
    }
}
catch(err){
    console.log("Custom",err); 
    console.log(err.name,err.message);   //Error name = error , Error message = Robot found
}







// ***********************************************************************************************************************************************************************************************************************************************************************************************************************************
// FINALLY BLOCK --> no matter if the error goes in try or catch block, this finally block will always execute no matter what


//when catch block runs
console.log("\n\n\n");
try{
    console.log(age);
}
catch(err){
    console.log(err.name);
    console.log(err.message);
}
finally{
    console.log("\nFrom finally after catch block");
}



//when try block runs
console.log("\n\n\n");
try{
    const age =10;
    console.log("age =",age);
}
catch(err){
    console.log(err.name);
    console.log(err.message);
}
finally{
    console.log("\nFrom finally after try block");
}

const ab = 2 * 4;
console.log("Value of ab =",ab);