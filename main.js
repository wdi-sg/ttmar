var firstLink = document.getElementById("first_paragraph");

firstLink.addEventListener("click", function() {
	document.body.style.backgroundColor = "red";

})


var secondLink = document.getElementById("second_paragraph");

secondLink.addEventListener("click", function() {
	document.querySelector(".second_paragraph").style.display = "inline";

})

var thirdLink = document.getElementById("first_chorus");

thirdLink.addEventListener("click", function() {
	document.querySelector(".first_chorus").style.display = "inline";

})

var fourthLink = document.getElementById("third_paragraph");

let fourthSelector = document.querySelectorAll(".third_paragraph")
console.log(fourthSelector)
// for (var i=0; i<fourthSelector.length; i++){
// 	fourthLink.addEventListener("click", function() {
// 		// console.log(fourthSelector[i])
// 		fourthSelector[i].style.display = "inline";
// 	});
// }

fourthSelector.forEach(function (item) {
	fourthLink.addEventListener("click", function() {
		item.style.display = "block";
	});
})


var fifthLink = document.getElementById("fourth_paragraph");

var fifthSelector = document.querySelectorAll(".fourth_paragraph");

fifthSelector.forEach(function (item) {
	fifthLink.addEventListener("click", function(){
		item.style.display = "block";
	})
})
// fifthLink.addEventListener("click", function() {
// 	document.querySelector(".fourth_paragraph").style.display = "inline";

// })

var sixthLink = document.getElementById("second_chorus");

var sixthSelector = document.querySelectorAll(".second_chorus");

clickTimes = 0;

sixthLink.addEventListener("click", function() {
	sixthSelector[clickTimes].style.display = "block";
	if (clickTimes<5) {
		clickTimes ++;}
	})

bodyClickTimes = 0;




// function randomNumberGenerator () {Math.floor(Math.random()*5);
// 	console.log("randomNumber", randomNumber)
// };

// switch (randomNumber) {
// 	case 0: color="orange";
// 	case 1: color="blue";
// 	case 2: color="green";
// 	case 3: color="blue";
// 	case 4: color="yellow";
// };

// let changeColor = function() {document.body.style.backgroundColor = color;
// continue;}

// document.addEventListener("click", changeColor);




var runBackgroundColor = document.addEventListener("click", function() {
		var randomNumber = Math.floor(Math.random()*3);
		console.log("randomNumber", randomNumber);
		var color = "";
		if(randomNumber=0) {
			color="orange";
		} else if (randomNumber=1) {
			color="blue";
		} else if (randomNumber=2){
			color="green";
		} else if (randomNumber=3){
			color="pink";}
		// switch (randomNumber) {
		// 	case 0: color="orange";
		// 	case 1: color="blue";
		// 	case 2: color="green";
		// 	case 3: color="blue";
		// 	case 4: color="yellow";
		// };
		console.log("color", color);
		document.body.style.backgroundColor = color;
		runBackgroundColor;}
	)
//Can't change the color when I click even though random number is generated.



