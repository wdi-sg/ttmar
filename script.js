// Remember to use the DOMContentLoaded event: document.addEventListener('DOMContentLoaded', doSomething); 
// or you might have a bad time.


// When the first link on the page is clicked, the background color should 
// change to something that is not white, blue, or black.
var firstLink = document.getElementById('first_paragraph');
var colors = ['green', 'purple', 'orange', 'salmon'];

function colorRandom() {
	var paragraph = document.getElementsByClassName('first_paragraph')[0];
	var randomValue = colors[Math.floor(Math.random() * colors.length)];
	paragraph.style.backgroundColor = randomValue;
}

firstLink.addEventListener('click', colorRandom);


// When the second through fifth links are clicked, the relevant part of the song should be displayed.
function displayVerse(className) {
	var elements = document.getElementsByClassName(className); // array of elements with the class name == className
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = '';
	}
}

document.getElementById('second_paragraph').addEventListener('click', function() { displayVerse("second_paragraph"); });
document.getElementById("first_chorus").addEventListener('click', function() { displayVerse("first_chorus"); });
document.getElementById("third_paragraph").addEventListener('click', function() { displayVerse("third_paragraph"); });
document.getElementById("fourth_paragraph").addEventListener('click', function() { displayVerse("fourth_paragraph"); });


// When the last link is clicked, one line of the chorus should be displayed. 
// Each subsequent click should display an additional line of the chorus until all 6 lines are displayed.

var lines = document.getElementsByClassName('second_chorus');

function revertColor(line) {
	line.style.backgroundColor = 'white';
}

function displayLine() {
	for (var i = 0; i < lines.length; i++) {
		var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		if (lines[i].style.display == 'none') {
			lines[i].style.display = '';
			lines[i].style.backgroundColor = randomColor;
			// For each click, the background color changes to a random color.
			setTimeout(function() { revertColor(lines[i]); }, 5000);
			// For each click the background color changes to a random color, then changes back after 5 seconds.
			break;
		}
	}
}

document.getElementById('second_chorus').addEventListener('click', displayLine);


// Keep count of the total number of clicks, and alert the user when they get to five clicks.

var clicks = 0;

function countFiveClicks() {
	if (clicks < 6) {
		clicks++;
	} if (clicks == 5) {
		alert("You clicked 5 times");
	}
}

document.getElementById('second_chorus').addEventListener('click', countFiveClicks);



// Let the user enter the name of the element to reveal through an HTML input. 



// Use a button to submit the input. (Hint: you won't need an event parameter in your callback for this.)



// Let the user know when they've entered the name of an element that doesn't exist.

