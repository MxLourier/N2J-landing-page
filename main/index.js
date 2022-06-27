
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
