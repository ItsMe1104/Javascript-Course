//Control Statements
/*
1) if-else
2) Switch
*/

// if-else statement 
// single if and else but multiple else if

let marks = 76;
if (marks >= 98) {
    console.log("A");
}
else if (marks >= 80) {
    console.log("B");
}
else if (marks >= 70) {
    console.log("C");
}
else if (marks >= 60) {
    console.log("D");
}
else {
    console.log("E");
}
// only if block is mandatory, rest can be ommited according to the logic required
// else doesnt need a condition
// if any one of the condition becomes true, that block is executed and rest all the blocks below are ommited, that is only if the condition is false then the next condition below is checked


// *******************************************************************

//Switch Case:
/*Let's say we have a mapping 
i/p --> o/p

1 --> A
2 --> B
3 --> C
Rest --> D

Syntax:-

switch(expression){
    case (condition1) : {

        break;
    }
    case (condition2) : {
        
        break;
    }

    default : {
        it is like the else block
    }
}

// If we dont write break after every case then even if just when we get a true condition ,all the below cases will also be executed without even checking
*/

let num = 2;

switch (num) {
    case 1:
        console.log("A");
        break;
    case 2:
        console.log("B");
        break;
    case 3:
        console.log("C");
        break;
    default:
        console.log("D");
        break;
}




// ****************************************************************
// Loops -- Repitition of task
// 1)for loop
    
/*
    //Once the initialization is done , if the condtitio is true then the statements in the block will execute and then the increment will happen and then again the condition is checked and if true the statements are executed and the increment is done. This cycle continues till the condition becomes false. 

     for(initialization; condition; increment)
    {
        -- Statements
        --
    }
*/

console.log("Loops");
for(let i = 0; i < 5 ; i++)
{
    console.log(i);
    console.log("Hrithik Shaw");
}




// ************************************************************************

// While loop
// Syntax:-->

/*
initialization
while(condition)
{
    --
    --
    Updation
}
//The loop will end when the condition becomes false
// Dont forget to do the updatation else it will turn into an infinite loop
*/

let i = 0;   //initialization
console.log("\nUsing While-loop");
while(i < 5)   //condition
{
    console.log(i);
    i++;   // updatation
}


// ************************************************************************************************

// do-While loop
// Syntax:-->

/*
initialization
do
{
    --
    --
    Updation
}(condition)

//The loop will end when the condition becomes false
// Dont forget to do the updatation else it will turn into an infinite loop
// It will always run for atleast once hence it can be used for games where we want the user to play first and then ask whther to play or not
*/

let j = 0;   //initialization
console.log("\nUsing Do-While-loop");

do
{
    console.log(j);
    j++;   // updatation
} while(j < 5);   //condition



//Difference between while and do-while loop
//while is an entry controlled loop while do-while is an exit controlled loop


// ************************************************************************

// Break and Continue
// break --> means total loop will be terminated and the control will move out of the loop
// continue means only that iteration will be terminated and control will fall back to the loop for the next iteration

console.log("\nBreak and Continue:");
for(let i = 0; i < 7; i++)
{
    if(i==3)
    {
        console.log("Conitiue at", i);
    continue;
    }

    if(i==5)
    {
        console.log("Break at", i);
        break;
    }
    

    console.log(i);
  
}



// Loops are actually used for executing some task repeatedly

// ***********************************************************************************