//the studip guy's guide to DOM 

//first step in manipulating DOM manipulation: DOMContentLoaded or window.onload:
//window.onload = function(){


	var body = document.querySelector('body');
	//creating a body variable which selects the body tag via query selector
	
	var firstLinkId = document.querySelector('#first_paragraph');
	var secondLinkId = document.querySelector('#second_paragraph');
	var thirdLinkId = document.querySelector('#first_chorus');
	var fourthLinkId = document.querySelector('#third_paragraph');
	var fifthLinkId = document.querySelector('#fourth_paragraph');
	var sixthLinkId = document.querySelector('#second_chorus');
	//create variables for each <a>tag. selecting them via their Ids.
	
	var firstColor = function(){
		body.style.background = 'pink';
	}
	//a function to change backgroundcolor of body tag

	var changeColor = function() {
		firstLinkId.addEventListener('click', firstColor);
	}
	//A function which listens for a click on the first link.
	//Upon which the firstColor function is invoked

	// var changeColor = function() {
	// 	firstLinkId.addEventListener('click', function(){
	// 		body.style.background = 'pink';
	// 	})
	// }
	// Alternate solution

	changeColor();
	//- When the first link on the page is clicked, the background color changes to pink


	
