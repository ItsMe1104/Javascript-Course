//Functions -->
// a block of code that fulfills a specific task 

// Why functions?
// --> reusability, modularity
// to avoid solving same bugs everytime

//Creation -->
// 1) 1st way of creating function --> function declaration
function printCounting(abc,abcd){
    console.log("Counting");
}

//Inorder to invoke the function, we must call it.
printCounting(2,5);  //since two input parameters are there hence two arguments must be provided

// function --> keyword
// printCounting --> function_name
// abc,abcd --> input parameters

//Note: even if we call the function before defining it, still it will run, because this is Js and not C++
// e.g -->

//function call
run();

//function definition
function run() {
    console.log("Running");
}

//This happens because the JS engine before executing the file puts all the functions at the top and then call at the last
//This is called hoisting. The process of moving function declaration to the top of file.
//This is done automatically by JS engine



// 2) 2nd way of creating function --> function assignment
//assigning it to a variable

let walking = function walk(){
    console.log("walking");
};

//Now call the variable name followed by braces as that variable has turned itself to a function due to function assignment
walking();

//But we cannot call walk() as it will give error now due to function assignment
// walk() --> will give error


// note : during function assignment --> we cannot make the call above declaration since hoisting only shifts function declaration and not function assignment
//hence during function assignment, function call should be below function definition


//If we further assign function assignment to some other variable, still we can call the actual function definition with the new variable

let stand = walking;
stand();



//******************************************************************************************************************************************* */
// Named Function Assignment vs Anonymous function assignment

// Named Function Assignment --> where we define the function name
let func1 = function walk(){
    console.log("\n\nNamed Function Assignment");
};
func1();

// Anonymous Function Assignment --> where we do not define the function name
// can only be used in function assignment
let func2 = function(){
    console.log("\n\nAnonymous Function Assignment");
};
func2();



//************************************************************************************************************************************************* */
// Dynamicity of functions
// we know that variables are dynamic in JS that is their value can be changed to any other data type at any point of time
//IS it true for functions too?


//e.g -->
console.log("\n\nDynamicity of functions with no. of arguments passed.");
function sum(a, b) {
    return a + b;
}

//Same no. of arguments
console.log("\nWill work with same no. of arguments as parameters -->", sum(2,3));

//less no. of arguments
console.log("Will give NaN with less no. of arguments as parameters -->", sum(2));
//this happens because the second parameter defined in function definition is treated as undefined since we did not send any value for it while calling the function

//less no. of arguments
console.log("Will give NaN with no of arguments but with parameters in function definition-->", sum());
//this happens because the first and second parameter defined in function definition is treated as undefined since we did not send any value for them while calling the function

//more no. of arguments
console.log("Will work with more no. of arguments than parameters -->", sum(2,3,4,5,6));
//this happens because the first and second parameter defined in function definition are given the first and second arguments passed during the function call while the other arguments are wasted and ignored.



//**************************************************************************************************** */
// Special Object in JS --> arguments
// arguments --> a type of object where,
// 1) very argument is mapped with an index starting from 0
// 2) callee : function signature
// 3) length : length of the no. of the arguments
// 4) Symbol : f values

console.log("\n\n Arguments --> a special type of object");
function abc(a,b)
{
    console.log(arguments);
    return a - b;
}

let obj = abc(1,2,3,4,5,6);

//remember it is object and not array




//How to make a function such that the return value depends on the arguments during call and not on the parameters of the function definition
// --> using advantage of loop in arguments object
function summ(/*a,b*/)
{
    let total = 0;
    for(let value of arguments)
    {
        total += value;
    }
    return total;
}

console.log("\n\nUsing arguments instead of parameters for return value");
let ans = summ(1,2,3,4,5,6);
console.log(ans);

console.log("\n\nUsing no arguments instead of parameters for return value");
let ans2 = summ();
console.log(ans2);

//hence even if we remove the input parameters still it would work absolutely fine as the work is done by arguments object which is filled by arguments passed during function call



//******************************************************************************************************************************************************* */
// Rest Operator --> (...)
// It helps to handle the input parameters in function definition
// it will put all the arguments during function call that are not conceived in any parameter, come in an array
// It is used in input parameter
// it should be the last input parameter orderwise and no input parameter can be defined after it else it will give error
// e.g -->  function(a,b, ...args,c){}  --> will give error

//when no parameters are there arg will contain all the arguments
function summm(...arg)
{
    console.log("\n\nUsing Rest operator(...) for printing the arguments",arg);
}

summm(2,3,4,5,6);


//when some parameters are there arg will contain all the arguments that are not mapped with the parameters and left behind
function rest(a,b,...argss)
{
    console.log("\n\nUsing Rest operator(...) for printing the arguments not mapped with the input parameters",argss);
}

rest(2,3,4,5,6,7,8,9);



// **************************************************************************************************************************************************************************
//Default parameters --> when the user doesnt give or forgot to give values for all the input parameters during function call, we might want that a default value for that parameter is taken by the function only if this happens
//the default value will only be taken if user didnt give any value for that argument
//note: al default parameters should be written at last hence they will mix up ith the values for other parameters during function call (but there is a hack)
//all the parameters defined after default paramter should also be default parameters only (but there is a hack discussed below)


console.log("\n\nUsing Default parameters to calculate interest where the default parameter for rate is set");
function interest(p,t=10,r=12)
{
    console.log("Interest is:",(p*r*t)/100);
}

interest(1000,8);   // 1000 --> p , 8 --> t (even though default value for t is given)


//bad practice
console.log("\n\nHack to overcome the dfaukt parameters order rule");
//just put undefined in the arguments place whose value we want to be taken by default parameter
//bad practice

function interest1(p,r=8,t) {
console.log("Interest is :",(p*r*t)/100);    
}

interest1(1000, undefined ,10);




//************************************************************************************************************************************************************************************************************ */
//GETTER & SETTER

//getter --> access properties
//setter --> change or mutate properties

let person = {
    fName : "Hrithik",
    lName : "Shaw"
};
//console.log(person);

//function to print full name taking values from object
function fullName(){
    return `${person.fName} ${person.lName}`;
}
console.log(fullName());

//issue --> this is a read-only function hence we cannot change or update the value in objects that is the concept of setter cannot be implemented



//for applying getter setter, we have to use the keywords get and set and put both the functions inside the object 

let person2 ={
    fName : "Hrithik",
    lName : "Shaw",

    get fullName()   //do not write function
    {
        return `${person2.fName} ${person2.lName}`
    },

    set fullName(value)
    {
        //since we are getting full name separated by space from user hance we need to split it
        let parts = value.split(" ");
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

//How to invoke getter?  obj_name.function_name
console.log("\n\nUsing getter -->",person2.fullName);  //remember no braces else error

//How to invoke setter? obj_name.function_name = value_to_be_passed
person2.fullName ="Rakesh Yadav";   //remember no braces

console.log("Using setter and getter -->",person2.fullName);  

//here getters and setters act more like properties and not functions

person2.fullName = "Priti";
console.log("\nUsing setter With no space value -->",person2.fullName); 
// note if we set a string with no space hence inside the setter parts[1] will be udefined and so lName will have the value undefined and the fullName will come as "Priti undefined"




//************************************************************************************************************************************************************************** */
//ERROR HANDLING --> using try and catch block

//we write our code in try block and if an error comes under the catch block where we throw custom error message
//we write code under try and catch block wherever we think that an error may happen due to us or 3rd party apis;

// e.g we passes into the setter a string of full name so that the spit function could work on it, since split() is a string method
//what if we passed something like a Number or a boolean where we cannot use split method, hence it will throw an error

// person2.fullName = true;   --> will give error because split is a string function
//therefore we put it in try block


//when no error was found
try {
    person2.fullName = "Priti Mukherjee";  //setter
    console.log("\n\nTry Block Executed\n",person2.fullName);   //getter
} 
catch (e)    //e --> is input parameter we also have to provide which contins info regarding the actual error, it can be any name
{
    console.log("You have sent a wrong input to the split() method");
}



//when error was found as we passed a Number to split() method
try {
    person2.fullName = true;  //setter
    console.log(person2.fullName);   //getter
} 
catch (e)    //e --> is input parameter we also have to provide which contains info regarding the actual error which we can print or use, it can be any name
{
    console.log("\n\nCatch Block executed")
    console.log("You have sent a wrong input to the split() method");
}




//Using input parameter of catch(e) to show output from setter
//for that we have to use the keyword -> "throw new Error" which acts like a return statement but straight to the catch block which eventually was called by try
//throw is a keyword
// new --> keyword to make an object
// Error --> a type of object


let person3 ={
    fName : "Hrithik",
    lName : "Shaw",

    get fullName()   //do not write function
    {
        return `${person3.fName} ${person3.lName}`
    },

    set fullName(value)
    {
        if(typeof value !== String)    //remember not string or "String"
        {
            throw new Error("You have not sent a String");
        }
        //since we are getting full name separated by space from user hance we need to split it
        let parts = value.split(" ");
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

try {
    person3.fullName = true;  //setter
    console.log(person3.fullName);   //getter
} 
catch (e)    //e --> is input parameter we also have to provide which contains info regarding the actual error which we can print or use, it can be any name
{
    console.log("\n\nCatch Block executed with throw statement from setter");
    console.log(e);
    // alert(e);
}

//alert will only show the message we throw but console will show the full error message along with the message thrown





//******************************************************************************************************************************************* */
// SCOPE : --> A variable's lifetime

// A variable's scope is only within its block
 
{
    let a = 5;
    console.log("\n\nWithin Scope using let: -->",a); 
}
// console.log(a);    // will give error as "a" is not there in this scope

// but things are different with var

{
    var a = 5;
    console.log("\n\nWithin Scope using var: -->",a); 
}
console.log("Outside scope without error due to var --> ",a);     //



// similarly
for(let i = 1; i < 5; i++)
{
}
// console.log(i);    will throw error since we cannot access let variable outsie its scope
//but

for(var i = 1; i < 5; i++)
{
}
console.log("\n\nAccessing var variable outside its scope of loop -->",i);  //prints 10



//but with functions --> var doesnt enjoy this advantage

function abc()
{
    let ab = 10;
    var bc = 20;
}

// console.log(ab);   --> will give error
// console.log(bc);   --> will give error

//This happens because no matter what (let,var,const) the variables die immediately after the function is over

//This is why there is no error of redefinition within different functions

function fun1()
{
    const a = 5;
}

const a = 5;

function fun2()
{
    const a = 5;  // no error while redefining
}


// *************************************************************************************************************************************************************