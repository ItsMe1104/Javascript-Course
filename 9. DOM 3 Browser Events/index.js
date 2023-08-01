//BROWSER EVENETS

// We want some code to be executed only on sudden events like hovering on a particular event, clickng a button, double click on an element, scrolling , when my entire HTML DOM is loaded,etc

// Things to know
// 1) events
// 2) respond to event
// 3) data stored in event
// 4) stop an event
// 5) lifecycle of an event



// Event --> Browser during an announcement
// World of events is invisible that is we do not see them initially





// *************************************************************************************************************************************************************************
//HOW TO SEE THE WORLD OF EVENTS :-

//To monitor all the events on a document or a particular element whenever an event is triggered
// use monitorEvents()


// Type monitorEvents(document) in console;
// Then do some activity on the web page we are inspecting like scrolling or clicking an element, moving or hovering cursor



//To disable seeing the events
// use unmonitorEvents(document);

//document in parameter means all the events occuring at the whole document





//******************************************************************************************************************************************************** */
// HOW TO PERFORM SOME ACTION ON A SPECIFIC EVENT

//USe eventListeners
// AN interface in JS is like a class in c++/JAVA , a blueprint


//listeners --> means when the event happens then what to respond
// a respond might be given or not, depends on the use case
// event hone ke baad kya action liya jayega


//Three terminologies -->
//1) EventTarget --> interface implemented by object that can receive events and may have listeners for them (that is they might respond or not)
// top-level interface that has no parent
// all the elements like p,article,video,etc come inside it
// the document also comes inside it
//window doesnt come inside it

// Methods inside EventTarget -->
// a) addEventListener()
// b) removeEventListener()
// c) dispatchEvent()

//2) Node (in DOM tree) -->  Node is inherited from EventTarget that is all the properties and methods will be inherited from EventTarget to Node

//3) Element (e.g --> <p>...</p>) --> Element is inherited from Node
//It has properties of both EventTarget and Node



//********************************************************************************************************************************************************************************************** */
// .addEventListener() --> respond to an event
// adding listener to an Event
// hook into an event

//SYNTAX :-
// <eventTarget>.addEventListener(<event_to_listen_for> , <function_to_run_when_event_happened() >);

//Required :-
// a) eventTarget -> component on which the event listener is to be applied (document,p,div,article,video,etc)
// b) event_Type -> type of event on which we will respond (click,double_click,scroll,etc)
// c) function -> what will happen when the event happens on the eventTarget


//e.g -> Adding eventListener() on document such that whenever we click on the document , it will show in console that we clicked.
document.addEventListener("click", function () {
    console.log("I clicked on the document\n");
});


//e.g -> Adding eventListener() on h1 such that whenever we click on the h1, its background color changes to aqua

//first fetch the h1 from the document 
let content = document.querySelector(".heading");
// adding eventlistener to it
content.addEventListener("click", function () {
    content.style.backgroundColor = "aqua";
});

//Note: if two event listeners overlap from different element then both will happen simultaneously 

//It also helps to collect data regarding mouse position , how much time our mouse was positioned there, did customers take a screenshot, what was mouse's x-position & y-position, did user click on a button 



// e.g --> Adding eventListener() on span tag such that whenever we click on it its text-content changes to I love mangoes and font size also increases
//we can also define the function out and put the name of the function in event listener


//first fetch the span from the document 
let content1 = document.querySelector(".changing_text");

// function
function changing() {
    content1.textContent = "I love Mangoes";
    content1.style.fontSize = "4rem";
}
content1.addEventListener("click", changing);

// we can also put event listener on "$0"
// such that whichever we click and select ,its properties changes





// **************************************************************************************************************************************************************************************************************
//TYPE COERSION  --> when JS will try to convert the items being compared to same type and then compare
// its mainly seen in "==" as there we only compare value thinking that the data type is same


//Difference between "==" (loose equality) & "===" (strict equality)
// ==     --> checks only value of items and not their data types (allows type coersion)
// ===     --> checks both value and data types of items (prevents type coersion)


//this concept will be used in removeEventListener()
// the function we passed in addEventListener, the same we have to pass in removeEventListener() else it wont be applied because different functions with same value are allocated in different memory locations hence we need to remove only that function which belonged to a memory location that was also used in addEventListener()






// ****************************************************************************************************************************************************
//REMOVING EVENT LISTENERS
// use .removeEventListeners()
// the function we passed in addEventListener, the same we have to pass in removeEventListener() else it wont be applied


// e.g-->
/*
    // Adding event listener
    document.addEventListener("click", function(){
        console.log("Hi");
    })


    //removing event listener
    document.removeEventListener("click", function(){
        console.log("Hi");
    })

 *************   //WRONG -->  ********************
Although both functions look same but still the removeEventListener wont be applied as both functions are defined separately
//functions are also objects hence they would be allocated in different memory locations whenever they are defined
*/



//Hence inorder to pass the same function in both addEventListener() and removeEventListener()
// we have to define the function outside and use the function name to pass in both addEventListener() and removeEventListener()

//first fetch the span from the document 
content1 = document.querySelector(".changing_text");

// function
function changing() {
    content1.textContent = "I love Mangoes";
    content1.style.fontSize = "4rem";
}

//adding event listener
content1.addEventListener("click", changing);

//removing event listener 
content1.removeEventListener("click", changing);



//Conditions for removeEventListener() to work
// --> same eventTarget
// --> same eventType
// --> same function






// **************************************************************************************************************************************************************************************
//CUSTOM EVENTS AND .dispatchEvent()
//We can deal with custom events using three steps:-
// a) create our custom event object
// b) Define the listeners to listen to our custom event
// c) fire the event



const heading_tag = document.querySelector(".dispatching");

heading_tag.addEventListener("headingChanged", function(e){
    //how to change using custom event --> event.detail.properties
    heading_tag.textContent= e.detail.number;
    heading_tag.style.color = e.detail.textColor;
});


function headingChanged(n,c)
{
    //CustomEvent is a type of object
    const event = new CustomEvent('headingChanged'/*same name as custom event*/,{
        
        //object in event
        detail:{
            number : n,   //passed parameters in function
            textColor:c
        }
    });

    //dispatching the event (remeber inside the function)
    heading_tag.dispatchEvent(event);
}

//Now we can use the above function in any other event listener like click or something and trigger it by calling the function
heading_tag.addEventListener("click", function(e){
    headingChanged(3,"blue");
});





// ********************************************************************************************************************************************************************************
// PHASES OF AN EVENT
// 1) Capturing phase  --> finding where the element on which we applied the listener is by travelling in DOM tree 
// 2) At target phase --> after we found it we target it which is the target phase
// 3) bubbling phase  --> after we targetted we need to go backtrack towards the root of DOM tree again



//the add.EventListener() is sometimes applied with three arguments
// --> event type 
// --> function
// --> useCapture --> under which phase we want to capture the element


//By default addEventListener() is executed in the bubbling phase

//How to execute it in capturing phase?
//just pass true as third argument in event listener

// <event_type>.addEventListener(event_type, function, true)  --> to execute event listener in capturing phase






// *******************************************************************************************************************************************************************
// EVENT BUBBLING & CAPTURING
//Stop propogation, Immediate Propogation and prevent default

// event bubbling -> every event on a child will also propogate to its parent and if that event is targeted by the event listener connected with the parent , then due to the child the event will fire
// children < parent < body < html
//At the same time we will learn how to use arrow function in addEventListener()



var div = document.querySelector(".d-1");
div.addEventListener("click", ()=>{
    console.log("Clicked on div");
});

//Due to bubbling, even if we click on button, the event listener on div will be fired

var button = document.querySelector(".btn-1");
button.addEventListener("click", ()=>{
    console.log("\n\nEvent Listener Propogation using bubbling");
    console.log("Clicked on button");
})

//propogation will occur from child to parent that is first button, then div, then body (not document) will be executed


//Now if we want the propogation to occur from parent to child, then we use capturing by passing true as third argument in the event listener
//by default capturing is set as false

div.addEventListener("click", ()=>{
    console.log("\n\nEvent Listener Propogation using capturing");
    console.log("Clicked on div");
},true);

button.addEventListener("click", ()=>{
    console.log("Clicked on button");
},true)

//Note: first the above capturing phase eventListener and then the bubbling phase event listener will be applied because capturing phase occurs before bubbling phase

//Note: if two event listeners on the same child and parent each , then the order of their execution will be:
// from top to down in order of written code
// both the events of child then both the events of parent
//at last body's event listener





// *********************************************************************************************************************************************************
//STOP PROPOGATION AND STOP IMMEDIATE PROPOGATION

/*event.stopPropogation() --> in bubbling phase , whenever this property is found it will only let all the listeners of itself execute and not let the event to further propogate to its parents, whether the propogation has been started by itself or its child , still it wont let it propogate anymore to the parent
                      --> in capturing phase , whenever this property is found it will only let all the listeners of itself execute and not let the event to further propogate to its children, whether the propogation has been started by itself or its parent


Note: if one listener is in bubbling pohase and one in capturing phase and on same element then just when a listener in capturing phase encounters event.stopPropogation, it will stop the other listener in the capturing phase also, but if both listeners are in same bubbling phase then it wont stop the other listener on the same element
*/

/* event.stopImmediatePropagation() --> if there are multiple event listeners connected with the same element then all the event listeners will execute on the order of their JS code from top to bottom but if just one of the listeners find this property then that listener will just execute itself and stop all other listeners even to the same element and their propogations to the bottom even of the same element (which stopPropogation dont do) 
*/

//Applying stopPropogation in bubbling phase
var div = document.querySelector(".d-2");
div.addEventListener("click", ()=>{
    console.log("Clicked on div2");
});

var button = document.querySelector(".btn-2");
button.addEventListener("click", (event)=>{
   
    console.log("Clicked on button2");
    console.log("\n\nStopping Propogation in bubbling phase");
    event.stopPropagation();

})

/*Similarly if we want to apply it in capturing phase then inorder to test it we would have to apply it on the parent that is div 2 since it goes from parent to children
//first comment the above code else the above code wont run

var div2 = document.querySelector(".d-2");
div2.addEventListener("click", (event)=>{
    console.log("Clicked on div2");
    console.log("\n\nStopping Propogation in capturing phase");
    event.stopPropagation();
},true);

var button2 = document.querySelector(".btn-2");
button2.addEventListener("click", ()=>{
   
    console.log("Clicked on button2");
},true)

*/





// *******************************************************************************************************************************************************************************
//StopImmediatePropogation()
var div = document.querySelector(".d-3");
div.addEventListener("click", ()=>{
    console.log("Clicked on div3");
});

var button = document.querySelector(".btn-3");
button.addEventListener("click", (event)=>{
   
    console.log("Clicked on button3");
    console.log("\n\nStopping Immediate Propogation hence every listener from this element will stop propogating");
    event.stopImmediatePropagation();
})

var button2 = document.querySelector(".btn-3");
button2.addEventListener("click", (event)=>{
   
    console.log("Clicked on button3 2nd time");
    console.log("\n\nStopping Immediate Propogation hence every listener from this element will stop propogating");
});

//Hence the second listener wont execute on hit me button since we used stopImmediatePropogation() 







// ***************************************************************************************************************************************************
//Event Object --> Browser sends the event, and then it has three phases --> capturing, target, bubbling phase, and then by default it executes in the bubbling phase 

//when an eent ocurs, addEventListener function receives an event object with lots of info about event

// *********************
//How to get that info?
// ********************
// pass a parameter to a nameless function and later console that parameter

const cont = document.querySelector("#wrapper");

cont.addEventListener("click", function (abcde) {
    console.log(abcde);
})


// *************************************************************************************************************************************************
//The Default Action:- the default action of various tags
//e.g --> the default action of anchor tag is to open a link when we click on it

// we can prevent the default action by using .preventDefault() method in the event object
// e.g -->

const anchors = document.querySelectorAll("a");
let not_work = anchors[3];

not_work.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Ab maza aaya?");
})




// *********************************************************************************************************************************************************************************************************************
//AVOIDING TOO MANY EVENTS

/*
 Base code:-

 let myDiv = document.createElement("div");

for(let i = 1; i <= 100; i++)
{
    let newElement = document.createElement("p");
    newElement.textContent="This is para "+ i;

    newElement.addEventListener("click",function(){
        console.log("You clicked para " + i);
    })
    myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);   (Remember not to append it only in document as only html tag is appended in document)
*/

//The above structure is:

/* 
<div>
    <p> </p>
    <p> </p>
    <p> </p>
    <p> </p>
</div> 

and the listener is added to every <p> tag, hence we are creating separate objects for all the <p> tags, hence we are wasting memory
*/


//Optimization 1: --> making one function and passing its name as parameters
//Note we cannot pass arguments inside function call of addEventListener if we define the actual function outside
// else it will call the event listener even without the event happening

/*
let myDiv = document.createElement("div");   //creating a new div

function stat(event)           // function definition 
{ 
    console.log("You clicked para ");  
}

for(let i = 1; i <= 100; i++)       //loop to create 100 <p>
{
    let newElement = document.createElement("p");    //creating new <p>

    newElement.textContent="This is para "+ i;     //adding text content to <p> tag

    newElement.addEventListener("click",stat);      // adding event listener

    myDiv.appendChild(newElement);     // connecting <p> with <div>
}

document.body.appendChild(myDiv);      //connecting <div> with html body

*/


//Optimization 2:  --> instead of attaching 100 <p> tags with event listener, just add eventListener to their parent that is the div 

/*
let myDiv = document.createElement("div");

function stat(event){
    console.log("You clicked " + event.target);
}

myDiv.addEventListener("click",stat);
for(let i = 1; i <= 100; i++)
{
    let newElement = document.createElement("p");
    newElement.textContent="This is para "+ i;

    myDiv.appendChild(newElement);
}
let newElement = document.createElement("p");
newElement.textContent="This is separate para "
let newElement1 = document.createElement("span");
newElement1.textContent="This is separate span "
newElement.appendChild(newElement1);
myDiv.appendChild(newElement);
document.body.appendChild(myDiv);

*/

//Problem is --> that now if we click anywhere on the div then the event listener will fie instead of just clicking on the paragraphs
//hence the <p> tags lost their individuality


//Optimization 3:  -->  playing with phases 
//inorder to know if we clicked on the <p> tag or not, we use a property called event.taget.
// It gets the element where the event occurred
// That is it will give the element where the actual event listener is applied
// That is wherever we clicked inside the div , if it is on an element then it will return that element

//if we use event.target.textContent --> then followng the rules of textContent it will return the textContent of the parent as well as its children because the event is executed during the bubbling phase 


let myDiv = document.createElement("div");
function stat(event) {
    console.log("You clicked " + event.target.textContent);
}

myDiv.addEventListener("click", stat);
for (let i = 1; i <= 100; i++) {
    let newElement = document.createElement("p");
    newElement.textContent = "This is para " + i;

    myDiv.appendChild(newElement);
}
let newElement = document.createElement("p");
newElement.textContent = "This is separate para "
let newElement1 = document.createElement("span");
newElement1.textContent = "This is separate span "
newElement.appendChild(newElement1);
myDiv.appendChild(newElement);
document.body.appendChild(myDiv);


// The above code is fine but how to solve the problem for text content of the chidren also

//use target.nodeName property which gives the nodeName of the element on which the event listener got applied 
/*
<article id="wrapper">
        <p>This is Para 1<span>This is span 1</span></p>
        <p>This is Para 2<span>This is span 2</span></p>
        <p>This is Para 3<span>This is span 3</span></p>
</article>
*/


// OPTIMIZATION 4 --> using target.nodeName property
let element = document.querySelector("#wrapper_article");
element.addEventListener("click", function (event) {
    if (event.target.nodeName === "SPAN") {
        console.log("Span par click kiya gya hai " + event.target.textContent);
    }
})





    // ******************************************************************************************************************************************************************************

    // Why script tag is always at good practice to be kept at the last of body tag and not at the head tag?
    /*
    <head>
    
    </head>
    <body>
        <script>...</script>
    </body>
    
    */



    //This is because it might happen if we use script tag in the head tag that the script might execute first but the HTML elements has not been loaded yet
    /*
    <head>
    
        <script>document.querySelector("footer").style.color="reds"</script>
    </head>
    <body>
        
    
        <footer>...</footer>
    </body>
    */

    //The footer that has not yet loaded we are trying to change its color


    // ***************************************************************************
    //SOLUTION : --> there is an event which tells us that the event has been loaded 
    //  DOMContentLoaded
    //inspect element and go to Network tab and see at the bottom as well at the graph


    //Hence to safely execute JS inside head tag after all the HTML has been loaded
    /*
    
    < head >
        <script>
            document.addEVentListener("DOMContentLoaded",function(){
                ...
                ...
               JS code
                ...
                ...
            })
        </script>
    </head >
*/

//Still it is good practice to use script tag at the last of body tag