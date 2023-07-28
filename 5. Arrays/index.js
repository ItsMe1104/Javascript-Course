//Arrays
// 1) Adding new elements
// 2) Fincing Elements
// 3) Renaming Elements
// 4) Splitting Elements
// 5) Combining Elements



//Arrays --> a reference type object
// a collection of different types of items
//indexing is done from 0

//Creation:
let numbers = [1,3,5,7];
console.log(numbers);


//Accessing elements:- 
// Using indexes
console.log("Accessing using indexes");
console.log(numbers[0]);  //1
console.log(numbers[3]);  //7
console.log(numbers[4]);  //will give undefined



//Insertion in array (start,end,middle)
//end --> push()
numbers.push(9);
console.log("Updated array after pushing 9",numbers);

//start --> unshift()
numbers.unshift(0);
console.log("Updated array after adding 0 at start:",numbers);

//middle ---> splice(index, no. of elements to delete, ele1, ele2,...)
numbers.splice(2,0,"a","b","c",'d');
console.log("Updated array after adding a,b,c,d at middle from index 2:",numbers);
 



//Searching in array --> use indexof()
//if the element to be searched is not present in the array then it returns -1
console.log("\nSearching in array");
console.log("a is present at",numbers.indexOf("a"));
console.log("57 is present at",numbers.indexOf(57));    //-1

//Indexof also helps to start the search from a particular index
// indexof(search_var, from which index)
console.log("Is b present from index 2 to end?",numbers.indexOf("b",2));
console.log("Is b present from index 4 to end?",numbers.indexOf("b",4));



console.log("\n\nChecking:")
//How to check if a number exists in array or not?
// 1) Using if (not recommended)
let search = 4;
if(numbers.indexOf(search)!=-1)
{
    console.log("Search(4) is present in array");
}
else
{
    console.log("Search(4) is absent from array");
}


//2) Using includes()
console.log("\n\nIs c present in array?",numbers.includes("c"));
console.log("Is search(4) present in array?",numbers.includes(search));






//********************************************************************************** */
//We did all the abov searching on primitives inside array
// Now we will try it on references inside array

//An array of objects
let courses = [
    {no:1, naam:"Hrithik"},
    {no:2, naam:"Shaw"}
]

console.log("\nAn array of objects\n",courses);

//With indexof() or includes() method we cannot search if an object s there in array or not
// This happens because with primitives we compared values but since objects are reference types hence the object we are searching and the object present in array are at different addresses

console.log("\n\nUsing indexof to search object\n",courses.indexOf( {no:1, naam:"Hrithik"}));   //-1
console.log("\n\nUsing includes to search object\n",courses.includes( {no:1, naam:"Hrithik"}));   //false



// To solve above problem we use Callback functions
//A method will be executed only after a function inside it is executed first which brings the data
// A callback function is a function passed into another function as an argument which is then invoked inside the outer funtion to  complete some kind of action
// The outer function is called parent function while the argument function is called callback function.
// predicate function (predicate means condition or comparison) which we will use here is a type of callback function which contains an iterator in argument that will iterate on the elements of array

//For searching objects in array the parent function is .find() 
//It returns the object if present else returns undefined

let course = courses.find(function(course)         //course is an input parameter which will one by one become the objects present in the array
{
    return course.naam === "Hrithik";
})

console.log("\n\nFinding object in array using predicate function\n",course);   // it will print that object


//making the above function short using arrow function
//remove "function" and add arrow after input parameter
//if input parameter is single then remove the brackets
//if no input parameter then only use () ollowed by arrow
//if only one statement then remove the braces and return


let course2 = courses.find(course => course.naam === "Shaw");
console.log("\n\nFinding object in array using arrow function\n",course2); 




//************************************************************************************************************************************************** */


//Removing elements from array (start,end,middle)
let numbers2 = [0,2,4,6,8,10,12,14,16];

//1) end --> use .pop()
//modifies the array
//returns the last popped element
console.log("\n\nPopped element from end:",numbers2.pop());
console.log("After popping the array is",numbers2);


//2) start --> use .shift()
//modifies the array
//returns the first popped element
console.log("\n\nPopped element from start:",numbers2.shift());
console.log("After popping the array is",numbers2);


//3) middle --> use .splice(index_no.,how many elements)
//modifies the array
//returns the popped elements
console.log("\n\nPopping two elements from middle that is index 1:",numbers2.splice(1,2));
console.log("After popping the array is",numbers2);




// ***************************************************************************************************
//Emptying an array

let numbers3 = [1,2,3,4,5,6];
console.log("\n\nEmptying by pointing to an empty array");
console.log("Array --> ",numbers3);

// 1) just make it equal to an empty array and later on garage collector will remove the unused elements
numbers3 = []; 
console.log("Emptied Array by equating to empty array -->",numbers3);


//but there is an issue -->
let numbers4 = [0,1,2,3,4,5];
let numbers5 = numbers4;

console.log("\n\nArray --> ",numbers4);
console.log("Copied Array --> ",numbers5);

numbers4=[];
console.log("Emptied Array by equating to empty array -->",numbers4);
console.log("Copied Array after emptying the original array -->",numbers5);
//hence the copied array still didnt get empty even though arrays are references
//This is because in references values are not copied rather addresses are copied and those addresses contain value
//hence by this method we dont delete the values in addresses rather we just point to a new address



//2) .length = 0  --> recommended way 

numbers4 = [0,1,2,3,4,5];
numbers5 = numbers4;
console.log("\n\nEmptying by making length = 0");
console.log("Array --> ",numbers4);
console.log("Copied Array --> ",numbers5);

numbers4.length=0;
console.log("Emptied Array by equating to empty array -->",numbers4);
console.log("Copied Array after emptying the original array -->",numbers5);
//Hence this way worked



//3) .splice() --> .splice( 0 , array.length );
numbers4 = [0,1,2,3,4,5];
numbers5 = numbers4;
console.log("\n\nEmptying by using splice()");
console.log("Array --> ",numbers4);
console.log("Copied Array --> ",numbers5);

numbers4.splice(0,numbers4.length);
console.log("Emptied Array by equating to empty array -->",numbers4);
console.log("Copied Array after emptying the original array -->",numbers5);
//Hence this way worked



//4) pop() in loop till array.length > 0
numbers4 = [0,1,2,3,4,5];
numbers5 = numbers4;
console.log("\n\nEmptying by using pop() inside loop");
console.log("Array --> ",numbers4);
console.log("Copied Array --> ",numbers5);

while(numbers4.length > 0)
{
    numbers4.pop();
}

console.log("Emptied Array by equating to empty array -->",numbers4);
console.log("Copied Array after emptying the original array -->",numbers5);
//Hence this way worked





// **********************************************************************
//Combining and Slicing Arrays (on primitives)
// slicing means to take out a part of array from anywhere
let first = [1,2,3];
let second = [4,5,6];

//1) Combining --> arr1.concat(arr2)
//does not modify the existing arrays
//rather returns the new combined array

let combined = first.concat(second);
console.log("\n\nCombined Array from [1,2,3] and [4,5,6] using concat method",combined);

//2) Combining --> using spread operator [...]
let combining = [...first, ...second];
console.log("\n\nCombined Array from [1,2,3] and [4,5,6] using spread operator",combining);

//we can also combine more than two arrays using spread operator
//they elements will come in order
let combining2 = [...first, ...second, ...combining];
console.log("\n\nCombined Array from [1,2,3] and [4,5,6] and their combined array using spread operator",combining2);


// we can also insert our own elements in between the arrays while combining using spread operator
let combining3 = [...first, 'a','b', ...second, true,undefined,null,false];
console.log("\n\nCombined Array from [1,2,3] and [4,5,6] along with a ,b in between and true,undefined,null,false in end using spread operator",combining3);



//2) Slicing --> arr1.slice(indx1, indx2);
//doesnt take into account indx2 --> [)
//doesnt modify the original array
//lets slice 2,3 out from the combined array

let sliced = combined.slice(1,3);
console.log("\n\nSliced Array [2,3] from [1,2,3,4,5,6] -->",sliced);

//if we just give one index then it slices from that index to last
let sliced2 = combined.slice(1);
console.log("\n\nSliced Array [2...6] from [1,2,3,4,5,6] -->",sliced2);

//if we dont give any index to an array --> it makes the copy of original array
//called full slicing
let sliced3 = combined.slice();
console.log("\n\nSliced Array as a copy of [1,2,3,4,5,6] -->",sliced3);


//slicing references in arrays (using slice method)
//same as in prmitives
let combined2 =[{one:1}, {two:2,four:4}, {three:3},{fifth:5},{sixth:6}];
console.log("\n\nSlicing Array of references (2nd and 3rd objects) from [{one:1}, {two:2,four:4}, {three:3},{fifth:5},{sixth:6}]",combined2.slice(1,3));

//*************************************************************************************** */
//Slicing in references 
//1) use Object.fromEntries(Object.entries(obj_name).slice())
//returns an object
let combined3 = {
    one: 'ONE',
    two: 'TWO',
    three: 'THREE',
    four: 'FOUR',
}

const sliced4 = Object.fromEntries(
    Object.entries(combined3).slice(1, 3)
)

console.log("\n\nSlicing object from combined3 to get 2nd and 3rd key-value pairs -->",sliced4);





//**************************************************************************** */
// Copying an array
// 1) Using slice method

let copy = combined.slice();
console.log("\n\nCopying an array using slice method in [1,2,3,4,5,6] -->",copy);




//2) Using spread operator --> (recommended way)
//doesnot modify the original array
//[...arr_name];

let copy1 = [...combined];
console.log("\n\nCopying an array using spread operator in [1,2,3,4,5,6] -->",copy1);



// *************************************************************************************************
//Iterating in array
let arr = [10,20,30,40,50];

//1) for-of loop --> only works for iterables like array,map
console.log("\n\nIterating in [10,20,30,40,50] using for-of loop");
for(let value of arr)
{
    console.log(value);
}


//2) for-each loop --> uses callback function
// Hence, for-each loop uses callback function
// Different from for-each loop in c++
console.log("\n\nIterating in [10,20,30,40,50] using for-each loop and callback function");
arr.forEach(function(number)    //input parameter -> number , that is array mei kya pada wa hai wo ban jayega
{
    console.log(number);
})


console.log("\n\nIterating in [10,20,30,40,50] using for-each loop and arrow function");
arr.forEach(number => console.log(number));    


// *************************************************************************************************
//Joining in arrays --> means joining all the elements in array separated by a defined character and converting them to a string

let num = [10,20,30,40,50];

let joined = num.join(",");
console.log("\n\nConverting elements of [10,20,30,40,50] into a joined string separated by ',' -->",joined);

let joined2 = num.join("_");
console.log("\nConverting elements of [10,20,30,40,50] into a joined string separated by '_' -->",joined2);

// to do the opposite that is create elements (break) from a joined string
// we use string function --> .split()
//refer to string functions in previous chapter




// **********************************************************************************************
//Sorting Arrays (ascending and descending)
//use .sort()
//sorts in lexiographic order --> dictionary wise
//modifies the array

let un_sorted = [4,3,1,5,2];
un_sorted.sort();
console.log("\n\nSorting the array [4,3,1,5,2] using sort() -->",un_sorted);

//but this is only valid for single digit numbers else it sorts in lexiographic order

let un_sorted2 = [4,23,1,3,5,2];
un_sorted2.sort();
console.log("\n\nLexiographic Sorting the array [4,23,1,3,5,2] using sort() -->",un_sorted2);
// By default, the sort() function sorts values as strings.


                            // **************************** //  

// NUMERICALLY SORTING, we use the predicate function
//modifies the array

//Ascending order
let un_sorted3 = [4,23,1,3,5,2];
un_sorted3.sort(function (a,b)
{
    return a-b;
})

console.log("`\n\nSorting numerically in ascending [4,23,1,3,5,2]", un_sorted3);

//the predicate function here -->
/*When the sort() function compares two values, it sends the values to the predicate function, and sorts the values according to the returned (negative, zero, positive) value.
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.
*/



//Descending order (just reverse a-b in predicate function)
let un_sorted4 = [4,23,1,3,5,2];
un_sorted4.sort(function (a,b)
{
    return b-a;
})

console.log("`\n\nSorting numerically in Ascending [4,23,1,3,5,2]", un_sorted4);



// reverse() --> reverses the array
//modifies the array
un_sorted.reverse();
console.log("\n\nReversing the array [1,2,3,4,5] using reverse() -->",un_sorted);



//*************************************************************************************************** */
// Sorting array of objects
let cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

console.log("\n\nArray of objects before Sorting -->",cars);

//sorting according to year
//simple sort() function wont work

cars.sort();
console.log("\nArray of objects after Sorting (no change) -->",cars);
//Hence did not work



// To sort the array of objects using sort function we have to again use predicate function

//sorting them accoridng to number data type of values
console.log("\n\nArray of objects before Sorting -->",cars);

cars.sort(function(a,b){
    return a.year - b.year;
});
//using arrow function
// cars.sort((a,b)=> a.year - b.year);

console.log("\nArray of objects sorted according to number data type of values(year) using predicate function in sort() -->",cars);




//sorting them according to string data type of keys
//we first convert all the characters to lower case using .toLowerCase() and compare their ascii values
let cars2 = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  console.log("\n\nArray of objects before Sorting -->",cars);

  cars.sort(function(a,b){
      let x = a.type.toLowerCase();   //because we type = key in object above
      let y = b.type.toLowerCase();
      
      //comparing ASCII values
      if(x < y)
      { return -1;}
     
      if(x > y)
      { return 1;}
      
      return 0;
  });
  
  //using arrow function
  // just remove function before input parameters and add an arrow after them

  console.log("\nArray of objects sorted according to string data type of keys(type) using predicate function in sort() -->",cars);




  //****************************************************************************************************************************************************************** */
// Filtering in array according to specific conditions
// .filter() to be used
// doesn't modify the original array
// .filter() uses a callback function (predicate function)

let number = [1,2,-1,-4,11,54,-22];

//let say we wnt to filter only positive elements
let filtered = number.filter(function(a){
                return a >= 0;
                });

console.log("\n\nFltered positive numbers from [1,2,-1,-4,11,54,-22] using filter() and predicate function -->",filtered);


//let say we wnt to filter only negative elements
//Using arrow function instead
let filtered2 = number.filter(a => a < 0);

console.log("\n\nFltered negative numbers from [1,2,-1,-4,11,54,-22] using filter() and arrow function -->",filtered2);





//****************************************************************************************************************************************************************** */
// Mapping Array: --> maps each element of an array to something else
// does not modify the original array
// uses a predicate / arrow function
let num2 = [7,8,9,10];    //elements in array are mapped with indexes
let items = num2.map(function (value){
    return "student_no" + value;
});

// using arrow function
// num2.map(value =>"student_no" + value); */

console.log("\n\nAfter mapping with indexes of [7,8,9,10] we get -->",items);




//Mapping with Objects
let nums = [1,2,-6,-9,7,11,-13];
let filtered1 = nums.filter(value => value >= 0);

let item = filtered1.map(function(num){
    return {value:num};
})

//arrow function
// item = filtered1.map(num => {value : num})

console.log("\n\nAfter mapping with indexes and objects with property = value and value = positive numbers and getting array of objects {value : element} mapped with indexes\n\n",item);




// *************************************************************
// Chaining --> the functions are executed from left to right
// e.g --> instead of writing separately we can directly write them together forming chains using "." notation in between

let item2 = nums.filter(value => value >= 0).map(function(num){
    return {value:num};
});




// ******************************************************************************************************
//REDUCING AN ARRAY --> reduce the array and change it to something else

//let say we want to sum the elements in an array

let arr1 = [1,2,3,4,5];

//1st way use loop
let total = 0;

for(let value of arr1)
{
    total += value;
}
console.log("\n\nSumming the elements of array using loop -->",total);


//2) reduce the array and change it to sum using .reduce()
//it takes one callback function with further two input parameters and one value (this is the initialized value of accumulator) --> one accumulator and one currentValue (currentValue = elements from array one by one)
//does not modify the actual array
//Comparing with loop version above,
// total : accumalator
// value : currentValue
// total = 0 : 0 (the second argument to reduce())
// if we dont give the second argument (0) in the reduce() function then the accumulator by default initialised to first element's value and the second argument of the predicate/arrow function will be initialised to second element's value of the array

//using predicate function
let abc = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);    // 0 is the initialised value of accumulator
console.log("\nUsing reduce method along with arrow function -->",abc);


//using predicate function
let abcd = arr1.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);      // 0 is the initialised value of accumulator
console.log("Using reduce method along with predicate function -->",abcd);