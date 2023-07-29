//Difference between Window, DOM and BOM

// 1) Window --> global object, that is it can be accessed from anywhere, there is no concept of scope here
//Created by Browser and represents browser window
// It contains DOM, BOM, JS core functionalities
// It is used to control browser window


// 2) DOM (Document Object Model) --> all the HTML webpage code is converted to JS object called document
//just write document in the console to see that object
// to see only a specific part of docment use (.) dot notation
// e.g --> for body type document.body in the console 


// 3) BOM (Browser Object Model) --> it allows JS to talk to Browser in matters other than content of page
// e.g --> location, history, alert()




// *****************************************************************************************************************************************************************
//DOM --> Document Object Model --> a tree like structure with the root element as html and the relationship of parents and children

// creation of DOM
// characters --> tags (starting tag, ending tag, meta tag) --> tokens (done by tokenizer) --> nodes --> DOM




//Small trick in Browser -->
// if we select an element while inspecting and type "$0" (without quotes) in console then we can access that selected element to print on console or store in a variable
// e.g --> let abc = $0;



//****************************************************************************************************************************************************************** */
//FETCHING AN HTML ELEMENT
// Use getElementById('id_name')
// save it in a variable
// if we give a wrong id or an id that doesnt exist then it retrns null
// it is always called on document object
// it always returns a single object as id is always unique

let get_ele = document.getElementById('get_e');
console.log("By ID --> \n",get_ele);   //wont show in server, try seeing in browser console, the element with id = "get_e" will be seen



// *****************************************************************************************************************************************************************************
// FETCHING MORE THAN ONE HTML ELEMENT AT THE SAME TIME
// we know that id is unique bt class name can be given to different elements

// we use getElementsByClassName(class_name)   (remember elements and not element)
// it returns an array-like-object of all the elements with same className
//it is not a whole array or object and it belongs to HTML Collection Interface
// it is always called on document object
//  we can access the elements using indexes 
//to iterate it use loop
// if there is no element with that classname then it returns an empty HTML collection array like object

let mul_ele = document.getElementsByClassName("By ClassName --> \n","ele");
console.log(mul_ele);




// ***********************************************************************************************************************************************************
// FETCHING ALL ELEMENTS WITH SAME TAG

// we use getElementsByClassName(class_name)   (remember elements and not element)
// it returns an array-like-object of all the elements with same className
//it is not a whole array or object and it belongs to HTML Collection Interface
// it is always called on document object
//  we can access the elements using indexes 
//to iterate it use loop
// if there is no element with that classname then it returns an empty HTML collection array like object

let tag_ele = document.getElementsByTagName("h1");
console.log("By Tag name -->\n",tag_ele);




// ******************************************************************************************************************************************************************
// KNOWING The classname of any dom object stored in a variable
// just write --> variable_name.className
//can also be used with $0

let exp = document.getElementById("abcd");
// Type exp.className in console , but we cannot store it like this in a variable or print it



// ******************************************************************************************************************************************************************
// FETCHING ELEMENT USING QUERY SELECTOR  (Returns single object)

// use querySelector("#id_name" / ".class_name" / "tag_name")
// it is always called on document object 
// It returns only one object from DOM
// in case there are mutiple class_names or tag_names with the specified name, then it returns the first one among that list

// use "# for id", ". for class_name", "tag_name"

let a = document.querySelector("#header");    //id
let b = document.querySelector(".header");   //class
let c = document.querySelector("header");    //tag

//again the problem is that it returns single object




//************************************************************************************************************************************************************************** */
// FETCHING MULTIPLE ELEMENTs USING QUERY SELECTOR ALL  (Returns all the document object with specified name)
// It is mainly usde for classes and tags as ids are always unique hence id should only be used by querySelector() for good practice

// use querySelectorAll(".class_name" / "tag_name")
// it is always called on document object 
// It returns all objects from DOM with specified name
//  we can access the elements using indexes
//It also returns arraylike object 
// // use "# for id", ". for class_name", "tag_name"


let d = document.querySelectorAll(".header");   //class
let e = document.querySelectorAll("header");    //tag




//**************************************************************************************************************************************************************** */
// UPDATING EXISTING CONTENT which is already there in DOM
//1) .innerHTML
//2) .outerHTML
//3) .textContent
//4) .innerText



//1) .innerHTML -->
//get --> It can get an element / or all of its descendents that is inner HTML (in hierarchy -> all nodes below it) in HTML Content
//set --> It can set an element's HTML content

//note if it is already null then we cannot use the innerHtml of that element

//returns the string containing the inner HTML (excluding the element tag that called it but it will show if some content is written between those tags)
//first store the element in a variable using querySelector()
// then type .innerHTML to see the element along with its children

let codingEX = document.querySelector(".code-example");
// Type codingEX.innerHTML in console , but we cannot store it like this in a variable or print it
//It will show the inner HTML (excluding the element tag that called it but it will show if some content is written between those tags)


//To change the children using innerHTML
// codingEX.innerHTML = "";   // delete all the inner HTML that is its children and make it empty
// Type codingEX.innerHTML in console and see it will show empty string


// codingEX.innerHTML = "<i>Hey i am italic</i>";
// Type codingEX.innerHTML in console and see it will show e


//******************************************************************************************************************************************************** */
// 2) .outerHTML -->
//get --> It can get an element / or all of its descendents that is inner HTML + itself (in hierarchy -> all nodes below it) in HTML Content
//set --> It can set an element's HTML content

//note if it is already null then we cannot use the innerHtml of that element

// works like innerHTML + it also returns the tag that called it
// --> the tag that called it + innerHTML


//returns the string containing the inner HTML (including the element tag that called it along with innerHTML)
//first store the element in a variable using querySelector()
// then type .outerHTML to see the element along with its children


let coding_outer = document.querySelector(".code-example");
// Type coding_outer.outerHTML in console , but we cannot store it like this in a variable or print it
//It will show the current tag + inner HTML 


//To change the children using innerHTML + current tag
// coding_outer.outerHTML = "<div> hey </div>";   // delete the current element and its inner HTML that is its children and relace the specified value in that place
// Type coding_outerHTML in console and see it will show new element in place of old

// coding_outer.outerHTML = "";
// Type coding_outer.outerHTML in console and see it will show completely null as the current element along with its children is deleted



//*************************************************************************************************************************************************************** */
// 3) .textContent -->
//get / set the textual content
//it returns a string and shows only text based

//cannot be applied if element is null 

// it gets all the text content inside the tag and further if there are more tags inside then , their text content will also be shown with no space in between.

/*
HTML -->
 <div class="get_text" id="get_e">Hrithik<span>Shaw</span></div>
*/

let text_con = document.querySelector(".get_text");
// let textt_content = text_con.textContent;
// console.log(textt_content);     //HrithikShaw    (no space in between)

// Type text_con.textContent in console 
// it will show HrithikShaw


//We can also set the text inside an element using .text_content() but it will replace all the text and children with this specified text

// text_con.text_content = "Hrithik Kumar Shaw"
// it will remove all the text and span tag inside that div and just add the text "Hrithik Kumar Shaw" inside that div





// Difference between textContent() and innerHTML()
//both returns strings

// textContent --> does not render children tags in between
// innerHtml --> renders children tags along with text content in form of a string


/* <div class="get_text" id="get_e">Hrithik<span>Shaw</span></div>  */

// console.log(text_con.textContent);    -->   HrithikShaw    (String)
// console.log(text_con.innerHTML);   -->  Hrithik<span>Shaw</span>   (String)



//****************************************** */***************************************************************************************************************************************************************** */
// 4) .innerText() --> 
//get / set the textual content
//it returns a string and shows only text based

//cannot be applied if element is null 

// it gets all the text content inside the tag and further if there are more tags inside then , their text content will also be shown with no space in between.



//Difference between .textContent() & .innerText()

// .textContent() --> it will return all the text content in the present tag as well as the text content present in the children tags
// It also prints the text content for the elements or their children that have the display:hidden even if in the media query

// .innerText() --> it will return all the text content in the present tag as well as the text content present in the children tags.
// It doesnt print the text content for those elements or their children that have the display:hidden even if in the media query.





// ***************************************************************************************************************************************************************************************************
// Difference between console.log and console.dir
// console.log(document.getElementById("abc"))
// console.log(document.getELementByID("abc"))

//console.log() --> shows the element DOM tree (parent and its child)
//console.dir() --> shows the element as an object with its properties




// *************************************************************************************************************************************************************************
//Adding New Element / Content Using JS

// Use .createElement()
// // it is always called on document object
// within braces type the element we want to create under quotes -->
//      document.createElement('span')

//Remember to attach it to its parent
// STeps -->
// 1) first store it in a variable
    let new_child = document.createElement('span');
// 2) Now store the parent element in a variable with which we want our element to attach
    let parent = document.querySelector(".get_ele");
// 3) Now use the .appendChild() on the child by the parent so that the element goes and gets added to the last of the parent (just before the closing tag of the parent)

//It returns nothing but just appends

    parent.appendChild(new_child);

//Hence a new and empty span tag will appear at the end of the div tag having class "get_ele"
// type parent in console to verify





// **********************************************************************************************************************************************************************
//ADDING TEXT NODE OR TEXT CONTENT TO AN ELEMENT
// as we saw that when we added a new element inside the parent element, then it was empty, but what if we want to add some text inside it ?

// 1) Use .createTextNode()    -->    not a good way
//It returns nothing but just appends

// Steps:-
// a) First create the new element and store it in a variable using .createElement()
        let newPara = document.createElement("p");
// b) Now create a new text node and store it in a variable using createTextNode()
        let textPara = document.createTextNode("I am the new text using createTextNode()");
// c) Now append the new text node with the newly created element using appendChild()
        newPara.appendChild(textPara);
// d) Now append the new element with the parent using appendChild()
        parent.appendChild(newPara);

//Hence a new and "p" tag with text-content = "I am the new text using createTextNode()" will appear at the end of the div tag having class "get_ele"
// type parent in console to verify




// 2) Use .text-content()      -->     (better way)

// STEPS :-
// a) First create the new element and store it in a variable using .createElement()
        let newPara1 = document.createElement("p");

// b) Use .textContent() to set the text content of the element
        newPara1.textContent = "I am the new text using textContent()";

// c) Now append the new element with the parent using appendChild()
        parent.appendChild(newPara1);


//Hence a new and "p" tag with text-content = "I am the new text using textContent()" will appear at the end of the div tag having class "get_ele"
// type parent in console to verify






// ********************************************************************************************************************************************************************* */
// ALL the above methods adds newly created element to the last of their parent
//Can we position the newly created element to the top, middle of inside their parents

//Use .insertAdjacentHTML()
// it contains two arguments
// 1st is location / position  --> before begin, after begin, before end, after end
// 2nd is HTML content/element/ext to be inserted


//a) beforebegin --> inserts the child as the previous sibling to the parent 
/*
e.g -->
<new_child> </new_child>
<parent> </parent>
*/

//a) beforeBegin --> inserts the child as the previous sibling to the parent 
/*
e.g -->
<new_child> </new_child>
<parent> </parent>
*/

//b) afterBegin --> becomes the first child of the parent
/*
e.g -->
<parent> 
    <new_child> </new_child>
    ...
    ...
</parent>
*/


//c) beforeEnd --> inserts the child as the last child to the parent 
/*
e.g -->
<parent>
    ...
    ...
    <new_child> </new_child>
</parent>
*/


//d) afterEnd --> inserts the child as the next sibling to the parent 
/*
e.g -->
<parent> ... </parent>
<new_child> ... </new_child>
*/


//STEPS :-
// 1) first create and store the new element
        let new_ele = document.createElement("h3");
// 2) Add some text inside the new element if required
        new_ele.textContent = "Using insertAdjacentElement()";
// 3) add the new element to the parent element to its required position using insertAdjacentElement()
        parent.insertAdjacentElement("beforeBegin",new_ele);
        parent.insertAdjacentElement("afterBegin",new_ele);
        parent.insertAdjacentElement("afterEnd",new_ele);
        parent.insertAdjacentElement("beforeEnd",new_ele);

//Note: One new element can be positioned only once around its parent 
// if multiple times we try to position it then the last position around its parent will be applied to it (here beforeEnd will be applied)





//***************************************************************************************************************************************** */
//REMOVE A CHILD ELEMENT

//use removeChild() -->
// it is the opposite of appendChild()
// we should know the following before applying it -->
// a) its parent element
// b) the child element to be removed

//Syntax -->
// parent.removeChild(child_element);


//Steps:-
/*
    <div>
        Hello
        <span></span>
        <p></p>
        <p></p>
        <h3></h3>
    </div>
*/

//Hence we try to delete the span tag from inside the div
// STEPS:-
// // 1) First store element to be removed in a variable
        let to_be_removed = document.querySelector("span");

// // 2) USe parent.removeChild(child_name) to remove or delete the child from the parent
        parent.removeChild(to_be_removed);

// //Hence the span tag will be removed
// //Type parent in console to see the change 


//The main drawback here is that we need to know the parent of the element to be deleted before hand





//************************************************************************************************************************************************************** */
// If we dont know about the parent of achild we can use the property .parentElement to that child to get its parent which we can store for our use

let be_removed = document.querySelector("h3");
let parent2 = be_removed.parentElement;    // to get the parent of be_removed ,that is, the h3 tag

//removing using .removeChild();
parent2.removeChild(be_removed);




//2nd method (better method)
// use --> .remove()
// If we dont know about the parent of a child we can use the .remove() method inorder to delete the current element
// we just need to store the element using querySelector and classname or id name (preferably) so that the remove method doesnt remove all the tags in the document if we only specify the tag inside query selector
//here we only have one h3 inside div so we will delete it using tag only

// STEPS:-
// 1)
// let be_removed = document.querySelector("h3");

// 2)
be_removed.remove();


 

//DIFFERENCE BETWEEN .remove() and .removeChild()  
// remove() --> not supported by earlier browsers
// returns nothing
// parent not required

//removeChild() --> supported by modern as well as old browsers
// returns the element removed so that we could store it and append it later if we want
// parent required 
 



// ******************************************************************************************************************************************************