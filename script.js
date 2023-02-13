/* Declare variables below to save the different sections (divs) of your story*/
//first button options
let entras = document.querySelector(".entras");
let corres = document.querySelector(".corres");
//two different first option screen
let entrasDiv= document.querySelector("option-one-screen");
let corresDiv= document.querySelector("corres");
//second button option
let ohNoButton=document.querySelector(".ohno");
let runButton=document.querySelector(".run");
//two different end option screens
let KidnappDiv=document.querySelector(".option-one-end");
let savedDiv=document.querySelector(".option-two-end");
//body
let body = document.querySelector("body");

entras.onclick=function(){
entras.style.display="Ahora que estamos adentro vas explorar y si tenemos suerte puede que encontremos a nuestro perro en este lugar";
};

corres.onclick=function(){
corres.style.display="";
};

