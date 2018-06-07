// ## Write some JS to do the following

// - When the first link on the page is clicked, the background color should change to something that is **not** white, blue, or black.

// - When the second through fifth links are clicked, the relevant part of the song should be displayed.

// > Remember to use the `DOMContentLoaded` event:
// > `document.addEventListener('DOMContentLoaded', doSomething);` or you might have a bad time.


document.addEventListener('DOMContentLoaded', function(){

	var link1 = document.getElementById('first_paragraph');
	var randomColor = function() {
		return ['red','green','orange','yellow','pink','purple','grey','gold','salmon','aquamarine'][Math.floor(Math.random() * 10)];
	}
	
	var bgColor = function() {
	// link1.style.backgroundColor = randomColor;
	document.body.style.backgroundColor = randomColor();
	}

	link1.addEventListener('click', bgColor);
	 

	var link2 = document.getElementById('second_paragraph');
	var para2 = document.getElementsByClassName('second_paragraph')[0];
	var displayYes = function() {
		para2.style.display = 'block';
	}

	link2.addEventListener('click', displayYes);
	


	var link3 = document.getElementById('first_chorus');
	var chorus1 = document.getElementsByClassName('first_chorus')[0];
	var displayChorus = function() {
		chorus1.style.display = 'block';
	}

	link3.addEventListener('click', displayChorus);

	// var showChorus = function() {
	// 	link3.addEventListener('click', displayChorus);
	// }

	// showChorus();

	var link4 = document.getElementById('third_paragraph');
	var para3 = document.getElementsByClassName('third_paragraph');
	var displayPara3 = function() {
		for (var i = 0; i < para3.length; i++) {
			para3[i].style.display = 'block';
		}
	}
	
	link4.addEventListener('click', displayPara3);


	var link5 = document.getElementById('fourth_paragraph');
	var para4 = document.getElementsByClassName('fourth_paragraph');
	var displayPara4 = function() {
		for (var i = 0; i < para4.length; i++) {
			para4[i].style.display = 'block';
		}
	}
	
	link5.addEventListener('click', displayPara4);

	var link6 = document.getElementById('second_chorus');
	
	var para5 = document.getElementsByClassName('second_chorus');

	var displayLine = function() {
		for (var i = 0; i < para5.length; i++) {
			if (para5[i].style.display == 'none') {
				para5[i].style.display = 'block';
				break;
			}
		}
	}

	link6.addEventListener('click', displayLine);



})





