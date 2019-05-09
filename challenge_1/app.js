var clickHandler = (el) => {
	el.style.backgroundColor= "red";
}

function hoverHandler(el, color) {
	if (el.style.backgroundColor !== "red") {
		el.style.backgroundColor = color;
	}  	  	
}

function hoverOutHandler(el) {
	el.style.backgroundColor = "white";
}

function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}