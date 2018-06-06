//the studip guy's guide

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

	var reveal2Para = function() {
	 	secondLinkId.addEventListener('click', function(){
	 	//add a click listener to the <a> tag

	 		document.querySelector('.second_paragraph').style.display = 'inline';
	 		//when clicked lyrics are revealed. Find it by its class and change its display to inline/block
	 	})
	 }

	 reveal2Para();

	 var reveal3Para = function() {
	 	thirdLinkId.addEventListener('click', function(){
	 	//add a click listener to the <a> tag

	 		document.querySelector('.first_chorus').style.display = 'inline';
	 		//when clicked lyrics are revealed. Find it by its class and change its display to inline/block/whatever else
	 	})
	 }

	 reveal3Para();

	var reveal4Para = function() {
	 	fourthLinkId.addEventListener('click', function(){
	 	//add a click listener to the <a> tag

	 		var para4 = document.querySelectorAll('.third_paragraph')
	 		for (var i = 0; i < para4.length; i++) {
	 			para4[i].style.display = 'block';
	 			//when clicked lyrics are revealed. Find it by its class and change its display to inline/block.
	 			//querySelectorAll and For loop required because each line is a new <p> tag. Need to reveal multiple/series of <p> tags
	 		}
	 	})
	 }

	 reveal4Para();

	var reveal5Para = function() {
	 	fifthLinkId.addEventListener('click', function(){
	 	//add a click listener to the <a> tag
	 		
	 		var para5 = document.querySelectorAll('.fourth_paragraph')
	 		for (var i = 0; i < para5.length; i++) {
	 			para5[i].style.display = 'block';
	 			//when clicked lyrics are revealed. Find it by its class and change its display to inline/block.
	 			//querySelectorAll and For loop required because each line is a new <p> tag. Need to reveal multiple/series of <p> tags	 			
	 		}
	 	})
	 }

	 reveal5Para();














