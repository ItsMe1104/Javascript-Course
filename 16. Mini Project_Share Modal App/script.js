const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//Modal open function
const openModal = () =>{
    console.log("Modal is Open");
    modal.classList.add("active");   //whose scale we will set to 1 in this class
    overlay.classList.add("overlayactive");
};


//Modal close function
const closeModal = () =>{
    console.log("Modal is Closed");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};