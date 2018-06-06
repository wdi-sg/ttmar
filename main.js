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
	
	// var firstColor = function(){
	// 	body.style.background = getRandomColor();
	// }
	// //a function to change backgroundcolor of body tag

	// // var changeColor = function(id) {
	// // 	id.addEventListener('click', firstColor);
	// }
	//A function which listens for a click. argument required
	//Upon which the firstColor function is invoked

	function getRandomColor() {
 		var letters = '0123456789ABCDEF';
 		//a string of numbers 1 -9 and A-F
 		
 		var color = '#';
 		//# added before adding hexadecimal color code

 		for (var i = 0; i < 6; i++) {
   			color += letters[Math.floor(Math.random() * 16)];
   			//returns # + 6 random alphabets and numbers
 		}
 		return color;
	}

	var changeColor = function() {
		body.addEventListener('click', function(){
		//A function which listens for a click in the body tag	
			
			body.style.background = getRandomColor();
			//the click invokes a change in color

			setTimeout(function() {
				body.style.backgroundColor = "white";
				}, 5000)
				//background changes to white after 5 seconds
			})
		}
	
	//Alternate solution
	//A function which listens for a click. 

	changeColor(firstLinkId);

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

	var index = 0
	//i is defined outside as 0
	var reveal6Para = function() {
	 	sixthLinkId.addEventListener('click', function(){
	 	//add a click listener to the <a> tag
	 		
	 		var para6 = document.querySelectorAll('.second_chorus')
	 		para6[index].style.display = 'block';
	 		// para[0] will be changed to block first
	 		index += 1
	 		// index = 1 outside the loop, so index 1 will be revealed instead of 0  	 		
		
	 		})
	 	}
	 

	 reveal6Para();

	var counter = 0;
	//counter set as global variable

	 clickCounter = function () {
	 	document.addEventListener('click', function() {
	 		counter += 1;
	 		console.log(counter);

	 		if (counter == 5) {
	 			alert('How many times you wanna click?');
	 			console.log(counter)
	 		}

	 		if (counter > 5) {

	 			counter = 0
	 		}
	 	})
	 }

	 clickCounter();
//}









