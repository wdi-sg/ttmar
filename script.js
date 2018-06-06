document.addEventListener('DOMContentLoaded',function(event){

var linksArr = document.querySelectorAll('a')
// console.log(linksArr)
var clickFirst = linksArr[0];
var clickSecond = linksArr[1];
var clickThird = linksArr[2];
var clickFourth = linksArr[3];
var clickFifth = linksArr[4];
var clickSixth = linksArr[5];
//console.log(clickFirst)

var body = document.querySelector('body');
var divArr = document.querySelectorAll('div');
var allP = document.querySelectorAll('p');

var changeColor = function () {
	body.style.backgroundColor = "grey";
}

clickFirst.addEventListener('click', changeColor);


var changeDisplay = function () {

	var linkId = this.id
	for (var i = 0; i < allP.length; i++) {

		if (allP[i].getAttribute("class") === linkId) {
			allP[i].setAttribute("style", "display: block")
		}
	}

	for (var j = 0; j < divArr.length; j++) {
		if (divArr[j].getAttribute("class") === linkId) {
			divArr[j].setAttribute("style", "display: block")
		}
		
	}

	// var linkId = this.id;
	// var thisClass = document.getElementsByClassName(linkId);   // returns an arry finds the elements with the same class as the id

	// for (var i = 0; i < thisClass.length; i++) {
	// 	thisClass[i].style.display = "block"
	// }
}

// adding an eventlistener to every element of linkArr
for (var i = 0; i < linksArr.length - 1; i++) {     // used 5 instead of linkArr.length as I do not want to add the eventlistener on the last element
	linksArr[i].addEventListener('click', changeDisplay);
}


// ---------------------------------------------------------------- bonus

var changeDisplayOneByOne = function() {
	var linkId = this.id
	var arr = document.getElementsByClassName(linkId)
	var newArr = [];

	// get an array with p>.second_chorus>style>display>none only (changes each time it's clicked)
	// get the first item of that array
	// change the first item of that array to display>block
	
	for (var i = 0; i < arr.length; i++) {
		var valueOfStyle = document.getElementsByClassName(linkId)[i].getAttribute("style")
		if (valueOfStyle === "display:none") {
			newArr.push(arr[i])
		} 
	}

	if (newArr.length > 0) {
		newArr[0].setAttribute("style", "display: block")
	}

	
}

// // ----------------- ace's codes
// var showLine = function() {
//     var att = this.getAttribute("id");
//     if (click < 6) {
//         var part = document.getElementsByClassName(att)[click];
//         part.setAttribute("style", "display: block");
//     }
//     click++
// }
// // end ----------------- ace's codes


clickSixth.addEventListener('click', changeDisplayOneByOne)

// end ------------------------------------------------------------ bonus

// -------------------------------------------------------------- bonus 2


var randomRGBA = function () {
	var color = ""
	var red = (Math.floor(Math.random() * 256));
	var green = (Math.floor(Math.random() * 256));
	var blue = (Math.floor(Math.random() * 256));
	var alpha = 1 // (solid color = 1) // (Math.random() * 1);
	var color = red + ", " + green + ", " + blue + ", " + alpha;
	return color;

	
}

var changeBGColor = function () {
	
	// generate random color
	var color = randomRGBA()
	var rgba = "rgba("+color+")";

	var BGcolor = "background-color: " + rgba
	console.log(BGcolor)

	// selecting document>style>body
	body.setAttribute("style", BGcolor);

}

for (var i = 1; i < linksArr.length; i++) {			// i = 1 so that it does not apply to first link as clashes with previous function
	linksArr[i].addEventListener('click', changeBGColor);
}

// end ---------------------------------------------------------- bonus 2

// -------------------------------------------------------------- bonus 3

// alert when 5 clicks
var clickCount = 0

var resetClickCount = function() {
	clickCount = 0
}

var fiveClick = function () {

	clickCount ++

	if (clickCount === 5) {
		alert("you have clicked 5 times");
		resetClickCount();
	}


}

for (var i = 0; i < linksArr.length; i++) {
	linksArr[i].addEventListener('click', fiveClick);
}

// end ---------------------------------------------------------- bonus 3

// -------------------------------------------------------------- bonus 4


var setBgColorTimeout = function () {
	
	//changeColorWhite()

	// // random color
	// var color = randomRGBA()
	// var rgba = "rgba("+color+")";
	changeBGColor()
	// // set random color to BG
	// body.style.backgroundColor = rgba;

	// set timeout of 3 sec
	setTimeout(changeColor, 3000)
	// setTimeout(function, seconds)
	// function will run after seconds

}

for (var i = 1; i < linksArr.length; i++) {   // i = 1 so that it does not apply to first link as clashes with previous function
	linksArr[i].addEventListener('click', setBgColorTimeout);
}

// end ---------------------------------------------------------- bonus 4






});