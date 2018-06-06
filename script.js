var firstLink = document.getElementsByTagName("a")[0];
var lastLink = document.getElementsByTagName("a")[5];
var links = document.getElementsByTagName("a");
var input = document.getElementById("input");
var button = document.getElementsByTagName("button")[0];
var click = 0;
var mouseclick = 0;
var input, className, showDiv;



// Bonus 2:

var switchColor = function() {
	var code = "#"
	var keyboard = "abcdef1234567890";
	for (var i = 0; i < 6; i++) {
		var num = Math.floor(Math.random() * 16);
		code += keyboard[num];
	}
	document.body.style.backgroundColor = code;
}

var showSong = function() {
	var att = this.getAttribute("id");
	var part = document.getElementsByClassName(att)[0];
	part.setAttribute("style", "display: block");
}

var showAllSong = function() {
	var att = this.getAttribute("id");
	var part = document.getElementsByClassName(att);
	for (var i = 0; i < part.length; i++) {
		part[i].setAttribute("style", "display: block");
	}
}

var showLine = function() {
	var att = this.getAttribute("id");
	if (click < 6) {
		var part = document.getElementsByClassName(att)[click];
		part.setAttribute("style", "display: block");
	}
	click++
}

var userInput = function() {
	className = input.value;
	showDiv = document.getElementsByClassName(className);
	if (showDiv.length === 0) {
		alert("Sorry there is no such paragraph class name.");
	}
	for (var i = 0; i < showDiv.length; i++) {
		showDiv[i].setAttribute("style", "display: block");
	}
}



function start() {

	// Part 1:

	firstLink.addEventListener("click", switchColor);



	// Part 2:

	for (var i = 1; i < 3; i++) {
		links[i].addEventListener("click", showSong);
	}

	for (var j = 3; j < 5; j++) {
		links[j].addEventListener("click", showAllSong);
	}


	// Part 3:

	lastLink.addEventListener("click", showLine);



	// Bonus 3:

	document.body.addEventListener("click", function() {
		mouseclick++;
		if (mouseclick === 4) {
			alert("You have clicked 5 times!");
		}
		var oldColor = document.body.style.backgroundColor;
		switchColor();
		setTimeout(function() {
			document.body.style.backgroundColor = oldColor;
		}, 5000);
	});



	// Bonus 5:

	button.addEventListener("click", userInput);

}

document.addEventListener('DOMContentLoaded', start);