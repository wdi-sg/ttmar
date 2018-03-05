

document.addEventListener('DOMContentLoaded', function() {
  
	/* When the first link on the page is clicked, the background color should change to something that is not white, blue, or black.*/

  	var firstLink = document.getElementById("first_paragraph");
  	var body = document.getElementsByTagName("body")[0];
	var changeBackgrd = function(){
		body.style.backgroundColor="blue";
	}
	firstLink.addEventListener("click",changeBackgrd);

	/* When the second through fifth links are clicked, the relevant part of the song should be displayed. */

	var secondLink = document.getElementById("second_paragraph");
	var secondPara = document.getElementsByClassName("second_paragraph")[0];
	var display = function(){
		secondPara.style.display="block";
	}
	secondLink.addEventListener("click",display);

		var firstChorusLink = document.getElementById("first_chorus");
	var firstChorus = document.getElementsByClassName("first_chorus")[0];
	var display = function(){
		firstChorus.style.display="block";
	}
	firstChorusLink.addEventListener("click",display);

	var thirdLink = document.getElementById("third_paragraph");
	var thirdPara = document.getElementsByClassName("third_paragraph")[0];
	var display = function(){
		thirdPara.style.display="block";
	}
	thirdLink.addEventListener("click",display);

	var fourthLink = document.getElementById("fourth_paragraph");
	var fourthPara = document.getElementsByClassName("fourth_paragraph")[0];
	var display = function(){
		fourthPara.style.display="block";
	}
	fourthLink.addEventListener("click",display);

	/** Bonus 
	When the last link is clicked, one line of the chorus should be displayed. Each subsequent click should display an additional line of the chorus until all 6 lines are displayed.*/

	//this doesn't work due to closure?
	// for(var i=0;i<secondChorusList.length;i++){
	// 	var singleClick = secondChorusList[i];
	// 	var display = function(){
	// 		singleClick.style.display="block";
	// 	}
	// 	secondChorusLink.addEventListener("click",display);
	// }

	//this shows all at once
	// secondChorusList.forEach(function (item) {
	// 	var display = function(){
	// 		item.style.display="block";
	// 	}
	// 	secondChorusLink.addEventListener("click",display);
	// })
	// ;

	var secondChorusLink = document.getElementById("second_chorus");
	var secondChorusList = document.getElementsByClassName("second_chorus");
	var displayText = function(item){
		if (item.style.display=="none"){
			item.style.display="block";
			return true
		}
	}
	secondChorusLink.addEventListener("click",function(){
		Array.from(secondChorusList).some(displayText);
	});

	/** Bonus 2 For each click, the background color changes to a random color.*/

	var randomBackgrd = function(){
		var red = Math.floor(Math.random()*255);
		var blue = Math.floor(Math.random()*255);
		var green = Math.floor(Math.random()*255);
		var background = `rgb(${red},${blue},${green})`;

		/** Bonus 4 For each click the background color changes to a random color, then changes back after 5 seconds.*/
		var currentColor = body.style.backgroundColor;
			setTimeout(function(){ 
				body.style.backgroundColor = currentColor; 
			}, 5000);

		body.style.backgroundColor=background;
	}
	body.addEventListener("click",randomBackgrd);

	/** Bonus 3 Keep count of the total number of clicks, and alert the user when they get to five clicks.*/
	var clickCount = 0;
	body.addEventListener("click",function(){
		clickCount++;
		if(clickCount==5){
			alert("You have made " + clickCount + " clicks!");
		}
	});

	/** Bonus 5 Let the user enter the name of the element to reveal through an HTML input. Use a button to submit the input. (Hint: you won't need event for this.) */
	var createInput = document.createElement("input");
	createInput.setAttribute("type", "text");
	createInput.setAttribute("id","inputField");
	document.querySelector("body").appendChild(createInput);

	document.getElementById("inputField").addEventListener('change',function(event){
		var input = event.target.value;
        if(document.querySelector(input)==null){
        	alert("Element not found!");
        }
        else{
        alert("Element found");
    	}  
    });
});




