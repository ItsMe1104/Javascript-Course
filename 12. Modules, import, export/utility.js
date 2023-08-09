export function multiply(a, b, c) {
    return a*b*c;
}

export function subtract(a, b) {
    return a-b;
}

function addition(a, b) {
    return a+b;
}

function divide(a, b) {
    return a/b;
}


//exporting multiple functions together
//renaming functions while exporting
export {
    addition as add,
    divide as div
};


//exporting variable
export let abc = 12;




//default export --> means this module will by default export this function
export default function square(a) {
    return a*a;
}

//or use
//  export default square;