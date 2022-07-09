let bars = document.getElementById("bars")
let navBlock = document.getElementById("navBar")
let navB = document.querySelector(".nav-b")
let navUl = document.querySelector(".nav")
let ul = document.querySelector(".ul")
let navJs = document.querySelector(".navJs")
let closeButton = document.querySelector(".closebtn")

bars.addEventListener("click", function (){
    bars.style.display = "none";
    navB.style.display = "block";
    navB.style.transition = "0.5s"
    closeButton.style.display = "block";
    navBlock.style.display = "block";
    navB.style.width = "250px";
})  

closeButton.addEventListener("click", function(){
    navB.style.width = "0";
    bars.style.display = "block";
})