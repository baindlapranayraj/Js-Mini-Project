//Selectings
let body = document.body;
let mainImage = document.querySelector("#main-img");


function colorChange(color){
    body.style.backgroundColor = `${color}`;
}

function imgSlide(imgPepsi){
    mainImage.src = `${imgPepsi}`;
}