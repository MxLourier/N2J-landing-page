let open = document.getElementById("icon-open");
let close = document.getElementById("icon-close");

open.addEventListener("click", ()=>{
  document.querySelector(".menu").style.display = "block";
})

close.addEventListener("click", ()=>{
  document.querySelector(".menu").style.display = "none";
})

function navbarHover(el) {
  el.querySelector("svg").style.display="inline";
}

function navbarUnhover(el) {
  el.querySelector("svg").style.display="none";
}

function creationHover(el) {
  el.querySelector("img").style.opacity = "0.5";
  el.querySelector("h3").style.color = "black";
}

function creationUnhover(el) {
  el.querySelector("img").style.opacity = "1";
  el.querySelector("h3").style.color = "white";
}
