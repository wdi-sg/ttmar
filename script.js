

function getRandomColor() {

  var color = ["red","green","purple","orange","yellow","violet"];
  var newColor = color[Math.floor(Math.random() * (color.length -1))];
  return newColor;
  
}

// find paragraph location
// var paraTwo = para[1].style.display;
var first = document.querySelector("#first_paragraph");
var body = document.querySelector("body");

var para = document.querySelectorAll("div");
var secondLink = document.querySelector("#second_paragraph");
var thirdLink = document.querySelector("#first_chorus");
var fourthLink = document.querySelector("#third_paragraph");
var fourth = document.querySelectorAll(".third_paragraph");
var fifthLink = document.querySelector("#fourth_paragraph");
var fifth = document.querySelectorAll(".fourth_paragraph");
var sixthLink = document.querySelector("#second_chorus");
var sixth = document.querySelectorAll(".second_chorus");

// click counting first link, alert after 5 times
var clickCount = 0;
first.onclick = function() {
	clickCount++;
	if (clickCount === 5) {
	alert("You have clicked 5 times.");
	clickCount = 0;
}
};

// click counting 6th link
var sixthClickCount = 0;
sixthLink.onclick = function() {
	sixthClickCount++;
	if (sixthClickCount == 5) {
	alert("You have clicked 5 times.");
}
}



document.addEventListener('DOMContentLoaded',function(){
  // all yur code goes here

	first.addEventListener("click", function() {
	body.style.backgroundColor = getRandomColor()
	});

	secondLink.addEventListener("click", function() {
		para[1].style.display = "block";
	})

	thirdLink.addEventListener("click", function() {
		para[2].style.display = "block";
	})

	fourthLink.addEventListener("click", function() {
		for (i=0; i<fourth.length; i++) {
			fourth[i].style.display = "block";
		}
	})

	fifthLink.addEventListener("click", function() {
		for (i=0; i<fifth.length; i++) {
			fifth[i].style.display = "block";
		}
	})

	sixthLink.addEventListener("click", function() {
		for (i=0; i<sixth.length; i++) {
				sixth[sixthClickCount].style.display = "block";
			}
			})

// click to generate random color, then
 // turn back to white after 5 secs
	sixthLink.addEventListener("click", function() {
  	body.style.backgroundColor = getRandomColor();
  	setTimeout(function() {
		body.style.backgroundColor = "white";
	}, 5000)
	})


})



