//Performance --> measuring Speed of code
        //    --> how to write efficient and performing code 
        //    --> Event Loop


//Standard way to measure how long our code took to run
// use performance.now()
//just add one timestamp before the lines of code
// add one timestamp after the lines of code
// do t2-t1 for time taken
//returns in milli seconds


//adding 100para
/*

const t1 = performance.now();    

for(let i = 1; i<=100; i++)
{
 let newElement = document.createElement("p");
 newElement.textContent = "This is Para " + i;
 
 document.body.appendChild(newElement);
}

const t2 = performance.now();

console.log("This took "+ (t2-t1) + " ms");

*/




//optimising abit

/*

const t3 = performance.now();
let myDiv = document.createElement("div");

for(let i = 1; i<=100; i++)
{
 let element = document.createElement("p");
 element.textContent = "This is Para " + i;
 
 myDiv.appendChild(element);
}

document.body.appendChild(myDiv);

const t4 = performance.now();
console.log("After optimising this took "+ (t4-t3) + " ms");

//Hence (t4-t3) will always be less than (t2-t1)
// Still this code is not that optimised because we just wanted to add 100 paras but without reason we had to add one div
// Due to 100 times reflow and repaint

*/



// Two Concepts -->
//a) Reflow --> whenever we put a new element in DOM, there are some calculations related to dimensions of the element and its positioning. These mathematical calculations is called reflow.
// It is the process of calculating the dimensions and positioning of page element . It is a computationally intensive task.

//b) Repaint --> After reflow, the layout is received and to show that new layout on the screen pixel by pixel is called repaint.
// The process of drawing pixels to the screen. It is faster than reflow

//Best practice --> minimise the reflow and repaint

//Hence for all 100 paras reflow, repaint will be happening one by one because the loop runs for 100 iterations
//Hence we will use the concept of Document fragment




//Document Fragment --> light weight document object
// all the 100 paras will be added on the document fragment first
// No reflow, repaint happens on document fragment
// only when we add this document fragment to the actual document then only 1 reflow and 1 repaint will occur
// use document.createDocumentFragment() method to create document


let fragment = document.createDocumentFragment();
for(let i = 1; i<=100; i++)
{
 let newElement = document.createElement("p");
 newElement.textContent = "This is Para " + i;
 
 fragment.appendChild(newElement);
}

document.body.appendChild(fragment);    //1 reflow and 1 repaint

//Hence whenever we need to update the DOM multiple times, there we use the concept of fragment






// ***********************************************************************************************************************************************************
//CALL STACK  --> sam as in cpp,java

// single threading --> one command executed at a time
//Js is a single threaded language, hence it processes only one command at a time
// execution happens from top to bottom line by line which tells us that JS is somewhat a synchronous language (line by line)






function addPara()
{
 let para = document.createElement("p");
 para .textContent = "Js is single threaded";
 document.body.appendChild(para);
 appendNewMessage();
}

function appendNewMessage(){
        let para = document.createElement("p");
        para.textContent = "Kya haal Chaal";
        document.body.appendChild(para);
}

addPara();



//Observations --> 
//a) Our code has "run-to-completion" nature --> that is if a function starts executing it will first execute iteself totally and then go to the next function

//b) Js does not execute multiple lines/functions at the same time

//How to make sure that a function executes itself totally and then move on to the next function
//Using Call Stack
//Call Stack --> is a list that keeps track of the functions(when a function is called, when a function is complete, which line of the function got executed, etc etc) in order

//Js engine keeps a call stack of the function that are running when a function is invoked it is added to the list ,when all of the code inside s function has been run, then it is removed from the call stack

// try to prepare a call stack for the following code
/*
        function a(){
                console.log("Hi");
        }

        function b(){
                console.log("Hello");
                a();
        }

        a();
        b();

*/





// *************************************************************************************************************************************************************************************************************
//EVENT LOOP :-

//Synchronous --> occuring at the same time
//till now the functions we saw were synchronous as all the lines were executed line by line in sync

//Not-sync (async) --> EventListener
//the callback function inside it will depend till a particular event occurs
//all network calls are async


//For uncderstanding Event loop we need three things :-
// Call Stack 
// Browser
// Event Queue


/*
//CODE :-
1) console.log("Hi");
2) element.addEventListener("click", function()
{
        console.log("123")
})
3) console.log("Hello");


//Steps:
--> First line , console.log() goes in the call stack, prints hi and gets erased from call stack
--> Second the add event istener will go into the call stack but then it sends its callback function to the Browser to execute it at the time of need as it is an asynchrounous function, hence the addEventListener() gets erased from the function
--> Third line , console.log() goes in the call stack, prints hi and gets erased from call stack
--> Now if we click on the page then the function will be shifted from Browser to Event queue
--> Now the event queue will execute it only if the cal stack is empty , else it will first let the call stack get empty and then puts the function in the call stack and executes it.

//This tells us that the eventListener might not execute on the go unless all the synchronous functions in the call stack are executed
*/


//EVENT LOOP --> PHILIP Robert , what the heck is event loop? in youtube
//Tool --> Search Loop in google by philip robert



//Points to remember :-
// 1) All the async code (event listeners, setTimeout()) uses JS Event Loop
// 2) Any async code is handled by browser
// 3) When this async code is ready to be executed, it moves to the queue and it waits until call stack is empty
// 4) Whenever call stack is empty, code moves from queue and gets executed








// ************************************************************************************************************************************************************************************************************
// setTimeout() METHOD 

// 1 second = 1000 milisecond
// It makes a function wait for a desired time before executing it
// Since it is an async code it is not guaranteed that it will always execute after the specified time only.
// The specified time is the minimum time it will wait to make the function execute while the call stack is empty
// After the call stack is empty and the specified time is over then only set timeOut function will run
// the specified time is presented in milli seconds


//This method runs code at a later point of time.
//It has two parameters --> 1) the function that we want to invoke
// 2) the minimum time after which the function will be invoked
// A call to setTimeout() function gives the callback function over to browser starts the timer and after the timer is over it passet it to the event queue and then if the call stack is empty then the callback function is passed to the event queue where it is executed

// even if the specified time is given as 0, still it will not execute directly if the call stack is not empty, as it will go to the event loop
// whenever we want to take the call outside of the flow and run it once after the call stack is free, we can use setTimeout with time 0


//Hence whenever we try to defer (delay) something until the callStack is empty we use setTimeout() function
//refer MDN , Stack overflow, or use chatGpt etc
//e.g -->

        setTimeout(function(){
                console.log("\n\nAfter minimum 4 seconds i am executed");
        },4000)