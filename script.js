


// bonus 2
//for each click, the background color changes to a random color
// rmb to declare function before calling
var numClicks = 0;



var switchColor =  function() {
	var color = '#';
	var code = 'abcdefg1234567890';
	for (i = 0; i < 6; i++) {
		color += code[Math.floor(Math.random() * 16)];

	}
	document.querySelector('body').style.backgroundColor = color; 
};


// When the first link on the page is clicked, the background color should change to something that is **not** white, blue, or black.

var firstPara = document.getElementById('first_paragraph');

firstPara.addEventListener('click', function() {
	switchColor();
	document.body.style.backgroundColor = 'salmon';
	numClicks++;
			     if (numClicks % 5 === 0) {
        alert("You have clicked " + numClicks + " times!");
	};
});
   



// When the second through fifth links are clicked, the relevant part of the song should be displayed.

// second lnk when clicked - sec para
var secondPara = document.getElementById('second_paragraph');

secondPara.addEventListener('click', function() {
	// console.log('this bitch working');

		document.querySelector('.second_paragraph').style.display = 'block';
	
	 numClicks++;
		     if (numClicks % 5 === 0) {
        alert("You have clicked " + numClicks + " times!");
}
    });



// third link click
var firstChorus = document.getElementById('first_chorus');

firstChorus.addEventListener('click', function () {
	// console.log('this bitch working');
			document.querySelector('.first_chorus').style.display = 'block';
	
		numClicks++;
   		     if (numClicks % 5 === 0) {
        alert("You have clicked " + numClicks + " times!");
}
    });
	

// var firstChorus = document.getElementById('first_chorus');

// firstChorus.addEventListener('click', function() {
// 	document.querySelector('.first_chorus').style.display = 'block';
// });

// // fourth link


var thirdPara = document.getElementById('third_paragraph');

thirdPara.addEventListener('click', function () {
		for (var i = 0; i < document.getElementsByClassName('third_paragraph').length; i++) {
			document.getElementsByClassName('third_paragraph')[i].style.display = 'block';
		}
		numClicks++;
			if (numClicks % 5 === 0) {
        alert("You have clicked " + numClicks + " times!");
}
    });
     

// fifth link clicked

var fourthPara = document.getElementById('fourth_paragraph');

fourthPara.addEventListener('click', function () {
		for (var i = 0; i < document.getElementsByClassName('fourth_paragraph').length; i++) {
			document.getElementsByClassName('fourth_paragraph')[i].style.display = 'inline';
		}
		numClicks++;
		     if (numClicks % 5 === 0) {
        alert("You have clicked " + numClicks + " times!");
}
    });

// When the last link is clicked, one line of the chorus should be displayed. Each subsequent click should display an additional line of the chorus until all 6 lines are displayed.


var secondChorus = document.getElementById("second_chorus");


    var i = 0;

    secondChorus.addEventListener("click", function (){
      document.getElementsByClassName("second_chorus")[i].style.display = "block";
      i++
      numClicks++;
      if (numClicks % 5 === 0) {
        alert("You have clicked " + numClicks + " times!");
}	
    });



// BONUS 4
// For each click the background color changes to a random color, then changes back after 5 seconds.

var resetColor = function(){
    document.querySelector('body').style.backgroundColor = 'white';
    var fiveSecondInterval = setInterval(resetColor, 5000);
};
resetColor();


// ## BONUS 5
// - Let the user enter the name of the element to reveal through an HTML input. Use a button to submit the input. (Hint: you won't need an `event` parameter in your callback for this.)

// ## BONUS 5.5 
// - Let the user know when they've entered the name of an element that doesn't exist.


// cant get it :(


// var searchElements = function() {
//       document.getElementsByTagName('button').addEventListener('change', function(event) {
//         var input = document.getElementById('button');
//         alert(document.getElementById(input));
//       });
//     }

// console.log("this is called whenever someone is clicked");



