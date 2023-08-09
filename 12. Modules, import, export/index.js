//NOTE:- index.js (main js file) is not configured as a module
// hence we need to add a property in the script tag inside HTML to make it a module
// property --> type = "module"


// as our program grows bigger, it may contain many lines of code which instead of putting in a single file, we can use modules to separate codes in separate files according to their functions.

//Benefits -->
// a) Easier to maintain 
// b) Makes code reusable as we can use that module in different files


//Any file where we use import / expost statement is alled a module


//Importing modules -->
import { multiply } from "./utility.js";
const result = multiply(2,3,4);
console.log("Multiply =",result);

//import {function_name_without brace} from "file_location where the function is present"




//Renaming variable names while importing and exporting
import { subtract as sub } from "./utility.js";

//now use sub only instead of subtract
const subt = sub(4,3);
console.log("Subtract =",subt);




//importing functions that have been already renamed during export
// we have to use renamed names that were used during export
import { add,div } from "./utility.js";

const addi = add(2,3);
console.log("Addition =",addi);


const divi = div(7,3);
console.log("Divison =",divi);




//importing all the functions that have been exported from a file
// use * notation

//-->      import * as hrithik from "./utility.js";

//while using imported functions
//-->      const addi = hrithik.add(2,3);





//importing variables and not functions from other files
import { abc } from "./utility.js";
console.log("\n\nExporting variable =",abc);






//importing default export from a file
// no curly braces --> signature of default export
// we can use any name as a variable because that module will have only one default export

import ritzzz from "./utility.js";
const sq = ritzzz(5);
console.log("Square =",sq);

