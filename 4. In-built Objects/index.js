// Inbuilt Objects
// 1) Math:
// For giving random no.s between 0 and 1
console.log(Math.random());

//For getting random no.s between 0 and b just multiply above with b
console.log(Math.random()*100);   //between 0 and 100


//For getting the value of PI
console.log("\Value of PI = ",Math.PI);


//For getting the round-of value of a decimal
console.log("Rounding of 1.8 to",Math.round(1.8));
console.log("Rounding of 1.2 to",Math.round(1.2));


//For getting value of a^b
console.log("\nGetting value of 4^3 =",Math.pow(4,3));


//for getting value of square root(a^1/2)
console.log("\nGetting square root of 25^1/2 =",Math.sqrt(25));


//For getting max of a bunch of numbers
console.log("\nGetting max of (7,4,19,12,6,2) =",Math.max(7,4,19,12,6,2));


//For getting min of a bunch of numbers
console.log("\nGetting min of (7,4,1,13,19,12,6,2) =",Math.min(7,4,1,13,19,12,6,2));


//For getting Modulus or absolute value of a number
console.log("\nGetting absolute value of 5 =",Math.abs(5));
console.log("\nGetting absolute value of -5 =",Math.abs(-5));

//For more Math methods refer MDN





// ************************************************************************************************************************************************
//In JS there are two types of String
// 1) Primitive data type
let last_name = "Shaw";

// 2) String object --> to make it we use String() constructor function
let lastName = new String("Shaw");

//To know the data type of a variable use typeof operator
console.log("\n Data type of last_name =",typeof last_name);    //string
console.log("\n Data type of lastName =",typeof lastName);      //object


//How to convert primitive string to object string inorder to use various String object methods.
// Just put a dot infront of primitive string variable name and JS will internally start treating it like a String object.
 
// e.g to find length of the whole string use variable_name.length property

//.length
console.log("\nBy converting last_name to String Object, we find the length of last_name =",last_name.length);


// Using indexes to access characters of a string
console.log("\n The 2nd index character of last_name is", last_name[2]);


// .includes() --> to know if our string contains a particlar substring or not
//returns a boolean
//Case sensitive

console.log("\n\nDoes last_name includes 'ha'? ",last_name.includes('ha') );
console.log("Does last_name includes 'pr'? ",last_name.includes('pr') );


//.startsWith() --> to know if our string starts with a particular substring or not
//returns a boolean
//Case sensitive

console.log("\n\nDoes last_name starts with 'Sha'? ",last_name.startsWith('Sha') );
console.log("Does last_name starts with 'ha'? ",last_name.startsWith('ha') );



//.endsWith() --> to know if our string ends with a particular substring or not
//returns a boolean
//Case sensitive

console.log("\n\nDoes last_name ends with 'aw'? ",last_name.endsWith('aw') );
console.log("Does last_name starts with 'sh'? ",last_name.endsWith('sh') );



//.toUpperCase() --> to change all the characters of string to uppercase
//Modifies the original string

console.log("\n\nChanging the total last_name to UPPERCASE --> ", last_name.toUpperCase());



//.toLowerCase() --> to change all the characters of string to lowercase
//Modifies the original string

console.log("\n\nChanging the total last_name to lowercase --> ", last_name.toLowerCase());



// .trim() --> to remove all the starting and ending spaces of a string and not the middle ones
//Doesnot modify the original string

let to_be_trimmed = "         Hrithik   Shaw     ";
console.log("\n\nTo be trimmed string -->",to_be_trimmed);

console.log("\nAfter trimming the string -->",to_be_trimmed.trim());

// Similarly trimStart() and trimEnd() will trim the start and end spaces only respectively.




// .replace() --> to replace a part of substring with some other substring
//Does not modify the original string, hence need to store it in a separate variable
console.log("\n\nOriginal string:", last_name);
console.log("After replacing 'ha' to 'ah' in original string -->", last_name.replace("ha","ah"));
console.log("\nStill the original string is unmodified -->",last_name);




// .split()  --> used to convert string to an array where the new elements are formed when they are separated by a defined character mentioned in the split function
//if that defined character is not present in the string then the whole string will be treated as one element and put into array
//Does not modify the original string

let message = "This is my first Message";
let arr = message.split(" ");   // hence whenever we find a space a new element is put into the array;
console.log("\n\n Converted String to array\n",message,"\n",arr);


let message2 = "This,is,my,first,Message";
let arr2 = message2.split(",");   // hence whenever we find a "," a new element is put into the array;
console.log("\n\n Converted String to array\n",message2,"\n",arr2);



//.indexof() --> will give the index of a specified character or substring in the string
//in case that the specified character is present more than one time in the string then the first index of that character is given
//incase the character is not present in the string then the index returned is -1.
let main_str = "I live in howrah.";

console.log("\n\nMain string =",main_str);
console.log("The first index of 'i' in main string is",main_str.indexOf("i"));
console.log("The first index of 'ow' in main string is",main_str.indexOf("ow"));
console.log("The first index of 'z' in main string is",main_str.indexOf("z"));

// similarly .lastIndexof will give the last index of a specified character or substring in the string




// ************************************************************************************************************
//Escape Sequences --> some characters cannot be used in the string directly, e.g --> if we use the same quotes in between with which we made the string
// e.g --> 'Hello this is Raj's house'   // will give error hence just put a backslash before "'" to make it an escape equence
// e.g --> \n is an escape sequence used to create new line
//escape sequence dont add up to the size of string nor do they have an index
console.log('\n\n Using escape sequence --> This is Raj\'s House');




// ************************************************************************************************************
// Template Literal --> If we want to output the string in same design as we see in editor
/*e.g-->
let message3 = "This
                is my third
                message"

will give error hence we have to use template literal to design like this
*/
//Template literals start and end with backticks

let message3 = `This is
my first
message`
console.log("\n\nUsing String literal -->", message3);
// Helps in writing emails and letters


//If we want to add dynamic variables in string template then we use ${variable_name}
//This is called placeholder
//e.g -->

let naam = "Hrithik"
let message4 = `Hello ${naam} 

Thanks for the Opportunity

Regards,
Shaw`;

console.log("\nAdding dynamic variable:");
console.log(message4);


//Note:
// object literal --> {}
// string literal --> ""
// template literal --> ``




//*********************************************************************************************************************** */

//Date --> It is an object that represents a single moment in time in a platform-independent format.
// There are 5 ways to create Date object
let date = new Date();
console.log(date);   //prints exact current date and time

//for other format
let date2 = new Date('April 11 2000 11:04');
console.log(date2);    //will print this time as mentioned


let date3 = new Date(2000,3,11,4);   //month indexing starts from 0 hence april means 3 ;  (year, month, date, time)
console.log(date3);


//Using getters setters to update dates
//setter --> to set a value to an object
//getter --> to receive/fetch from an object
date3.setFullYear(1999);
console.log("\nUpdated date --> ",date3);

date3.setMonth(5);
console.log("\nUpdated date --> ",date3);


let month = date.getMonth();
console.log("\nMonth is: ",month);
//similarly many getter,setter are there
