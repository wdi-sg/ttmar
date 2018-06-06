document.addEventListener("DOMContentLoaded", function(){

var anchorArr = document.querySelectorAll("a");  // array of anchors
var body = document.querySelector('body'); // entire body element

//Part 1

clickFirst = anchorArr[0];  // selects first anchor link
// clickSecond = anchorArr[1];
// clickThird = anchorArr[2];
// clickFourth = anchorArr[3];
// clickFifth = anchorArr[4];

var changeColor = function() {
	body.style.backgroundColor = "rgb(255, 25, 100)";
};

clickFirst.addEventListener('click', changeColor);   // function to change background color when click event is fired

//Part 2

var divArr = document.querySelectorAll("div");  // getElementsByClassName/TagName  querySelectorAll are in arrays
var pArr = document.querySelectorAll("p");
var secondChorus = document.querySelector(".second_chorus");

var changeDisplay = function() {
	var id = this.id;				
 	for(var i = 0; i < divArr.length; i++) {
 		if(divArr[i].getAttribute("class") === id) {   // loop through all <div> class
 			divArr[i].setAttribute("style", "display: block");
 		};
 	};
 	for(var i = 0; i < pArr.length; i++) {		// loop through all <p> class
 		// if(pArr[i].getAttribute("class") == "second_chorus") {
 		// 	for(var i = 0; secondChorus.length; i++) {	
 		// 		secondChorus[i].setAttribute("style", "display: block");
 		// 	}
 		// }
 		if(pArr[i].getAttribute("class") === id) {
 			pArr[i].setAttribute("style", "display: block");
 		}
 		
 	};
};

// loop through anchors to change display
for(var i = 0; i < anchorArr.length; i++) {
	anchorArr[i].addEventListener('click', changeDisplay);
};

// create function for random color
var randomColor = function() {
	var r = Math.floor(Math.random() * 255 + 1);
	var g = Math.floor(Math.random() * 255 + 1);
	var b = Math.floor(Math.random() * 256 + 1);
	body.style.background = "rgb(" + r + ", " + g + ", " + b + ")";  // rgb( r, g, b)  eg. rgb( 255, 255, 1 ) 
	return body.style.background;
};

// loop through anchor array to change background color
for(var i = 0; i < anchorArr.length; i++) {
	anchorArr[i].addEventListener('click', randomColor);
};

// create global variable for counter
var countClicks = 0

// loop through anchor array and set on.click listener
for(var i = 0; i < anchorArr.length; i++) {
	anchorArr[i].onclick = function() {
		countClicks += 1
		console.log(countClicks);
		if(countClicks === 5) {
			alert("clicked 5 times!");		//alert when clicked 5 times
		};
	};
};

});	// end of DOMContentLoaded function

