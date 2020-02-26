function showMenu(){
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");

    let fade = document.querySelector(".fade-layer");
    fade.classList.toggle("visible");
}

//Eventlistener

let button = document.querySelector(".menu-button");
let layer = document.querySelector(".fade-layer");

button.addEventListener("click",showMenu);
layer.addEventListener("click",showMenu);