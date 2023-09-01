//Using onclick="function()" attribute in button tag in html to invoke the increment or decrement function
//can also be done using eventListener

//fetching the element to increment and decrement
const countValue = document.querySelector("#counter");

const increment = () =>{

    //getting the value from UI
    //converting string value to number value
    let value = parseInt(countValue.innerText);
    
    //Updating the value
    value++;
    countValue.textContent=""+value;
    //or use
    // countValue.innerText = value;
};


const decrement = ()=>{

     //getting the value from UI
    //converting string value to number value
    let value = parseInt(countValue.innerText);
    //Updating the value
    value--;
    countValue.textContent=""+value;
    //or use
    // countValue.innerText = value;
};