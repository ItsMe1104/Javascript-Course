// EVENT HANDLING :-

// Events allow you to write JS cod that reacts to certain situations.
//e.g --> Examples of events include
// --> user clicks the mouse button
// --> the web page loading
// --> a form field being changed


//There are 2 ways to handle events :-
//By using an event handler
//By adding an event listener




//EVENT HANDLER:-
// these get triggered based on specific actions on the HTML elements
//these are put directly on the html events
//these start with "on"
//these are passed as attributes in html tag
//the value of this attributes is the function call which we want to execute when the event happens (remember function call and not just function name)
//this function will be defined in JS


//e.g --> <div onclick="myFunction()"> box-1 </div>

// e.g -->

// 1) onclick()  -->  This event handler invokes a JavaScript code when a click action happens on an HTML element. E.g., when we click a button, a link is pushed, a checkbox checks or an image map is selected, it can trigger the onClick event handler.


// 2) onload()  -->  This event handler invokes a JavaScript code when a window or image finishes loading.


// 3) onmouseover()  -->  This event handler invokes a JavaScript code when we place the mouse over a specific link or an object.


// 4) onmouseout()  -->  This event handler invokes a JavaScript code when the mouse leaves a particular link or an element.


//The below ones will not work on just any element but only the ones which can gain focus .... like the body or input elements

//5) onkeypress()  -->  This event handler invokes a JavaScript code when the user presses a key. (when pressing the key makes the keyboard sound)


//6) onkeydown()  -->  This event handler invokes a JavaScript code when during the keyboard action, we press the key down. (when we press and take the key down)


// 7) onkeyup()  --> This event handler invokes a JavaScript code when during the keyboard action, the key is released.   (After releasing when the key comes up)
 

// when we press a key these three events happen in order
//*)   keydown --> keypress --> keyup


//Note we can add multiple event handlers on a single HTML element



function myFunction(){
    console.log("clicked on box-1");
}


const mouseOver = ()=>{
    console.log("Mouse Over on box-2");
}


function mouseMove() {
    console.log("Mouse Move on box-3");
}



function keyPress() {
    console.log("Key was pressed");
}


function keyUp() {
    console.log("Key Up");
}

function keyDown() {
    console.log("Key Down");
}


//if we hold the key down continuously then keyDown and keyPress will keep on happening simultanously








// *********************************************************************************************************************************************************************************************************************************************************
//EVENT LISTENERS :-

//unlike Event Handlers, we define event listeners entirely in JS
// we cannot directly write the function body
// first we have to target the elment on which we wish to apply the event
//no need to use "on" here (onclick --> click)


//SYNTAX :-
// .addEventListener("event_name", callbackfunction())

//on box-4
const box4 = document.getElementById("box-4");

box4.addEventListener("click",()=>{
    console.log("click by event");
})






//Event listener vs Event handlers

//--> Event listener recommended as the work related to JS is done in JS file only 

//--> we cannot add same event handler multiple times on a single HTML element
//--> if we do that then the last defined event handler will overwrite all the other same event handlers for that element
//--> Using event listener we can add multiple event listeners for same event on an HTML element and they will execute in order and simultaneously
//e.g -->

box4.addEventListener("click",()=>{
    console.log("click by event2");
})


// some events in event listeners 

// onclick --> click 
// onload --> load
// onmouseover --> mouseover
// onmouseout  -->  mouseout
// onkeypress  --> keypress
// onkeydown  -->  keydown
// onkeyup  --> keyup





// *********************************************************************************************************************************************************************************************************************************************************
//EVENT OBJECT IN EVENT LISTENERS


//the input parameter in the callback function of an eventlistener will be the default event object
// can be given any name in the input parameter as the first parameter is by default dedicated to eventobject
//ths event object will give all the necessary details regarding the event like the target, position,etc


box4.addEventListener("click",(err)=>{
    console.log("Event object :-",err);
})



//for getting position of x and y coordinates during mouse hover
//hover --> mouseover
//we use .clientX and .clientY

box4.addEventListener("mouseover",(eve)=>{
    console.log("Event position:-",eve.clientX,eve.clientY);
})



//Keyboard events

//1) To know inside the input tag which key is being pressed
//we use .key

const nameInput = document.getElementById("nameInput1");
nameInput.addEventListener("keypress",(e)=>{
  console.log("key ->",e.key);  
});

//we wont get the functional keys like backspace, shift, ctrl keys with keypress event, arrowup,arrow down for that we have to use keydown event


//this is because keydown event tracks our physical keyboard
nameInput.addEventListener("keydown",(e)=>{
    console.log("key ->",e.key);  
  });




//2) Focus event in the input tag
//it gets triggered when we focused on something
//at once we can only focus on one input box

nameInput.addEventListener("focus",(event)=>{
    console.log("Focus Event", event);  
  });




//   **************************************************************************************************************************************************************************************************************************************************************************
// BUBBLING vs CAPTURE

/*
--> There are two ways of event propagation in the HTML DOM, bubbling and capturing. Event propagation is a way of defining the element order when an event occurs.

--> In bubbling the innermost element's event is handled first and then the outer element events.
In capturing the outermost element's event is handled first and then the inner element events.

--> With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter:

    addEventListener(event, function, useCapture);

--> the default value of useCapture is false, which will use the bubbling propogation when the value is set to true, the event uses the capturing propogation

//Capturing input parameter is always applied on the parent
*/



const box5 = document.getElementById("box-5");
const box6 = document.getElementById("box-6");
const container5 = document.querySelector(".container-5")
const container6 =  document.querySelector(".container-6")





//bubbling
box5.addEventListener("click", ()=>{
    console.log("box-5 clicked");
})

container5.addEventListener("click", ()=>{
    console.log("container-5 clicked");
});
//by default capturing set to false
//first div then container





//capturing
box6.addEventListener("click", ()=>{
    console.log("box-6 clicked");
})

container6.addEventListener("click", ()=>{
    console.log("container-6 clicked");
},true);
//setting capturing to true
//first container then div


