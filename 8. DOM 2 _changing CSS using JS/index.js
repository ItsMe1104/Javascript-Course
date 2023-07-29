//CHANGING in CSS using JS

// we can style page content using JS
// .style
// .style.cssText
// .setAttribute()
// .className
// .classList


//Note there are three ways we can use CSS in our HTML code
// inline, internal and external
// Among these inline has the highest precedence





// **********************************************************************************************************************************************************
//.style  --> so that we can apply CSS properties to a specific HTML element one at a time
//Use Camelcase in JS wherever we used "-" in CSS for this property

let to_be_styled = document.querySelector(".get_ele");

to_be_styled.style.color = "aqua";     //div's text colour changed to aqua
to_be_styled.style.backgroundColor = "red";      //div's background-colour changed to red



//DRAWBACK --> At a time we can only add or change a single property only




// **********************************************************************************************************************************************************
//.style.cssText  --> so that we can apply multiple CSS properties at the same time to an element using JS
// here we pass CSS properties in a string and here we write them as we write actual CSS

let to_be_styled2 = document.querySelector(".get_ele2");

to_be_styled2.style.cssText = "color:green; background-color:yellow; font-size:4em";





//********************************************************************************************************************************************************** */
//.setAttribute() --> can be used for styling as well as adding id or class to an existing element
//here we need two parameters
// first --> what we want to set
//      use "style"  --> adding CSS properties
//      use "id"  --> for adding id   (earlier given ids will be deleted)
//      use "class" --> for adding class   (earlier given class will be deleted)

// second --> which value we want to set
// here we pass CSS properties in a string and here we write them as we write actual CSS

// note it helps us to style with multiple CSS properties on an element at the same time

// but if we try to style that element multiple times using setAttribute with one property each time then the earlier properties set by setAttribute will be deleted


let to_be_styled3 = document.querySelector(".get_ele3");


//to set CSS properties
to_be_styled3.setAttribute("style","color:orange; background-color:red;font-size:5rem");


// to add an id to it
to_be_styled3.setAttribute("id","adding-id");


// to add a class to it
to_be_styled3.setAttribute("class","priti");





// *********************************************************************************************************************************************
// className --> returns all the class names in a string separated by a space in same way as they are written inside tag
// remember sometimes to make code more visible we give starting and ending spaces while writing class names
//e.g -->  class =" first second third ";
//These white spaces in the front and rear will also be treated as class names, hence try to use the trim method to remove the spaces from front and rear
// Since it returns a string hence we cannot iterate over classnames
// but since, the class names are always separated by space (" ") hence we can use the split method to put them in an array so that we can iterate over it later


//STEPS :-

//selecting the element with multiple class names
let class_n = document.querySelector("#five_classes");

//getting all the class names in a string using className property
let str = class_n.className;

//trimming the string to remove spaces from front and rear
str = str.trim();

//splitting the string by spaces and converting into an array using split() method
let arr = str.split(" ");

//Now we can iterate over the arr using loop to get our required class name
//class_n.className.trim().split(" ")   --> single line






//*********************************************************************************************************************************************************************************/
//.CLASSLIST PROPERTY
//It was vry tedious to get al class names in a string using className property and then trim and convert them into array using split()

//Instead we can use .classList property to get a list object of all the class names
// .classList returns an special type of object 
let class_l = document.querySelector("#five_classes");
let obj = class_l.classList;

// returns an object of class names
// type typeof obj in console to verify
// later we can iterate using loop





// *************************************************************************************************
// CLASSLIST PROPERTIES

// Now this object has some special properties
// 1) add("class_name")       -->   to add a class name to the end
obj.add("sixth");

// 2) remove("class_name")    -->   to remove a class name from the list of classes as well as in the original HTML tag
obj.remove("fifth");

// 3) toggle()                 --> if a class is present it will remove it and vice versa (used during applying dark-mode).
obj.toggle("second");        // will remove second since it is already present in classList
obj.toggle("seventh");       // will add seventh since it is not present in classList


// 4) contains()               --> returns boolean if a specific class name is present in the classList or not.

console.log(obj.contains("seventh"));      //returns true
console.log(obj.contains("hrithik"));      //returns false