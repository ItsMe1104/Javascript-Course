//Objects in JS
//An entity having properties and behaviour
//An entity having a collection of key-value pairs

//Object Creation
let a= {};   // Empty object (not an array)


//Object Declaration
let rectangle ={
    
    //properties
    length: 1,
    breadth: 2,

    //behaviour(function) syntax
    //function is a program that does a single well-defined task
    // but function inside an object is called a method
    draw: function()
    {
        console.log("Drawing Rectangle");
    },

    //Another way to define function inside object
    draw1()
    {
        console.log("Drawing Rectangle again");
    }
}

//Accessing method of an object (using dot operator)
// object_name.function_name();
rectangle.draw();

//Accessing properties of an object (using dot operator)
// object_name.property_name;
console.log("\nProperties");
console.log("Length = "+ rectangle.length, "Breadth = " + rectangle.breadth);


//This type of programming is called object oriented programming



//******************************************************************************8 */
// Object Creation
//1) Factory Function --> where the objects are created and we just get them from there
//2) Constructor Function


// 1) Factory Function
// Steps  --> define the object in a function and return that function

function createRectangle(){
 
    return rectangle ={
    
        //properties
        length: 1,
        breadth: 2,
        //behaviour(function)
        draw: function()
        {
            console.log("Drawing Rectangle");
        }
    }
}

// Now we just need to call a function assigned to a variable and that object will be created

let rectangle2 = createRectangle();
let rectangle3 = createRectangle();
  
console.log("Rectangle2:",rectangle2);
console.log("Rectangle3:",rectangle3);



//But do we only want to make rectangles whose length ad breadth are defined due to factory function?
// To make the length and breadth variable we pass input parameters to factory function
function create_variable_cuboid(length,breadth,height) {
    
    return cuboid ={
        length: length,
        breadth: breadth,
        height,     // another way to use parameters directly if above one is more confusing 

        draw(){
            console.log("Drawing cuboid of",length,breadth,height);
        }
    };
}

let cuboid1 = create_variable_cuboid(3,4,5);
let cuboid2 = create_variable_cuboid(6,7,8);
let cuboid3 = create_variable_cuboid(9,10,11);

console.log("Cuboid1:",cuboid1);
console.log("Cuboid2:",cuboid2);
console.log("Cuboid3:",cuboid3);



// ******************************************************************************************************************************************************************************************
//2) Constructor
//constructor function --> prop/methods --> initialise/Define
//It does not have e return type hence we dont need to write return
// Here we use Pascal Notation instead of camelCase
// Pascal Notation --> first letter of every word is Capital --> NumberofStudents
// "this" --> refers to the current object

function Rectangle(){
    this.length = 1;
    this.breadth = 2;
    this.draw = function(){
        console.log("drawing");
    }
}

//Object creation using constructor function
//Use of new keyword --> returns an empty object
let rectangle5 = new Rectangle();
console.log(rectangle5);


//Parametrized Constructor
function Rectangle(length,breadth){
    this.length = length;
    this.breadth = breadth;
    this.draw = function(){
        console.log("drawing");
    }
}

let rectangle6 = new Rectangle(7,8);
console.log(rectangle6);




//************************************************************************** */
// Dynamic Nature of Objects
// addition or deletion of any property or behaviour in an object is possible at anytime and not only at the time of object creation

rectangle6.height = 4;
console.log("\nAdding height in existing object:\n",rectangle6);


//for deleting a property we use delete keyword
delete rectangle6.height;
console.log("\nAfter deleting height in existing object:\n",rectangle6);


//************************************************************************* */
// Constructor Property of object --> it tells us about how the object was made using constructor 
//can only be seen in console
// rectangle6.constructor;

console.log(rectangle6.constructor);


//constructor property of a function/constructor
// functions are also objects hence they will also possess the constructor property


console.log(Rectangle.constructor);  //will show a default Function constructor

//definition of this default Function constructor
// Function('parameter1','parameter2',..., `entire child constructor code`);


let Rect = new Function('length','breadth',`
    this.length = length;
    this.breadth = breadth;
    this.draw = function(){
        console.log("drawing");
    }`
);
// internally this is the inbuilt structure of a that constructor Rectangle

console.log(Rect);



//********************************************************************************************************************************* */
// Difference between primitive and reference types
// 1) For primitive(Number,String,Boolean,Null,Symbol,Undefined):- If a variable is made equal to some other variable and later on we change the value of first variable then the value of the first variable will be preserved in second variable

    // For object:- If an object is made equal to some other object and later on we change the value of first object then the value of the first object will also change in second object.

let abc = 5;
let abcd = abc;
console.log("\nCurrent value(abc abcd):",abc,abcd);

abc = 7;
console.log("\nAfter changing value of abc -->(abc abcd):",abc,abcd);
//hence earlier value of abc is preserved in abcd


let obj1 = {
    hrithik: 11
}

let obj2 = obj1;
console.log("\nCurrent value(obj1 obj2):",obj1,obj2);

obj1.hrithik = 2000;
console.log("\nAfter changing value of obj1.hrithik -->(obj1 obj2):",obj1,obj2);
//hence the value of obj2's hrithik = obj1's hrithik



//2) While passing as arguments to the function
    // For Primitive: the copy of that variable is passed called local variable hence any changes to that local variable won't affect the value of original variable
    
    // For reference types or objects --> a reference / address of that variable is passed called reference variable hence any changes to that reference variable will also change the value of original variable

// e.g -> for primitives
let num = 10;
console.log("Before passing to function num =",num);
function inc(num)
{
    num++;
}
inc(num); 
console.log("After passing to function num =",num);
//Hence value of num remains same due to pass by value


//for reference types or objects

let obj = {value:10};
console.log("Before passing to function obj.value =",obj.value);
function inc(obj)
{
    obj.value++;
}

inc(obj);
console.log("After passing to function obj.value =",obj.value);
//Hence the value of obj.value will change due to pass by reference



// ******************************************************************************************
//Iterating in objects
// 1) For-of
// 2) For-in



//2) for-in 
let rectangle_new ={
    length:2,
    breadth:4
}

// 1)Iterating in keys
for(let key in rectangle_new)
{
    console.log("\nKeys in rectangle_new:",key);
}

// 2) Iterating in values of keys (Using Bracket Notation)
for(let key in rectangle_new)
{
    console.log("\nKeys in rectangle_new:",rectangle_new[key]);
}


//3) Iterating in key value pair
for(let key in rectangle_new)
{
    console.log("\nKey-value pair in rectangle_new:",key,rectangle_new[key]);
}


//************************************************************************ */
// 2) For-of loops --> can only be used in iterables (arrays,maps)
// cannot be put in objects else will give error
// but can be printed using one hack

//will give error
/*
for(let key of rectangle_new)
{
    console.log(key);
}
*/ 

// But can be surpassed using one hack
// 1) Object.keys(obj_name) --> will give all the keys as it will turn the object into an array

console.log("\n Printing keys using for-of loop from objects")
for(let key of Object.keys(rectangle_new))
{
        console.log(key);
}


//2) Object.entries(obj_name) --> will give all the key-value pairs as it will turn the object into an array

console.log("\n Printing key-value pairs using for-of loop from objects")
for(let key of Object.entries(rectangle_new))
{
        console.log(key);
}




// How to identify if a paricular property is present in the object or not using 'in' keyword

if("color" in rectangle_new)
{
    console.log("Present");
}
else{
    console.log("Absent");
}



if("length" in rectangle_new)
{
    console.log("Present");
}
else{
    console.log("Absent");
}



//*********************************************************************** */
// Object cloning --> dono ka addresses alag rhega but values same clone hoga
// 1) iteration 
// 2) Assign
// 3) Spread

// 1) iteration - Create an empty object and then iterate using for in in second object and fill the empty object inside loop 


let src = {value1 : 10, value2 : 20};
let dest = {};

for(let key in src)
{
    dest[key] = src[key];
}

console.log("\n\n");
console.log(src,"\n",dest);


// 2) assign - Using object.assign operator clone src object into destination object
// Can be used to clone and merge one or more objects in destination object. The properties will always come in order of source objects present in the assign operator 
// Justmake sure that the properties name shouldnt overlap else they will merge and the last ordered source object's property will be put in destination
let src2 = {a: 1, b:25};   // Try using properties {value1,value2}
let dest1 = Object.assign({},src);
let dest2 = Object.assign({},src, src2);
console.log("\n\n");
console.log(src ,"\n",dest1);
console.log(src,src2,"\n",dest2);


//3) spread - Using spread operator{... } clone src into destnation object

let dest3 = {...src};
console.log("\n\n");
console.log(src ,"\n",dest3);

// To check if they are actually cloned or not then just change the value of the src objects's properties and see if the values of those properties in the destination object also changes or not



// **********************************************************************************************
// Garbage Collection in JS --> frees memory of those variables or constants that are not currently in use
// We have no control over Garbage collector







































































































































