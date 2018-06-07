//create a function that changes the bg color

var bgColor = function() {
document.body.style.backgroundColor = 'red';
};

//create an event listener that waits for click on the first link

var firstLink = document.querySelector('a');
firstLink.addEventListener('click',bgColor);


//function displayOn makes the body elements visible
var allElements = document.body.children;
var displayOn = function() { 
	for (var i = 0; i < allElements.length; i++) {
		//if allElements[i] === check if element is a link



		allElements[i].style.display = 'block';
	};
}


//loop through everything in body - if it is a link, then create an array within that spot and fill it with 
//all the links inside of that section
var allLinks = document.querySelectorAll('a');






//selects all of the links and adds an event listener that triggers displayOn function 
for (var i = 0; i < allLinks.length-1; i++) {
	allLinks[i].addEventListener('click', displayOn);
}


