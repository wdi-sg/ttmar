// ## Write some JS to do the following

// - When the first link on the page is clicked, the background color should change to something that is **not** white, blue, or black.
function randcolor(){
	var letters = '0123456789ABCDEF';
	var color = '#';
   	for (var i = 0; i < 6; i++) {
      	color += letters[Math.floor(Math.random() * 16)];
	};
   return color;
};

function final(){
	while(randcolor() == ['#FFFFFF','#0000FF','#000000']){
		randcolor();
	}
	return randcolor();
}

// - When the second through fifth links are clicked, the relevant part of the song should be displayed.

// ## BONUS 2
// - For each click, the background color changes to a random color.
// > Remember to use the `DOMContentLoaded` event:
// > `document.addEventListener('DOMContentLoaded', doSomething);` or you might have a bad time.

// ## BONUS!
// - When the last link is clicked, one line of the chorus should be displayed. Each subsequent click should display an additional line of the chorus until all 6 lines are displayed.

var firstlink= document.getElementById('first_paragraph');
var firstpara= document.querySelector('.first_paragraph');
firstpara.style.color='black';
firstlink.addEventListener('click',function(){
	this.style.backgroundColor=final();
	firstpara.style.display='block';
});

var secondlink= document.getElementById('second_paragraph');
var secondpara= document.querySelector('.second_paragraph');
secondlink.addEventListener('click', function(){
	secondpara.style.display='block';
	secondlink.style.backgroundColor=randcolor();
});

var thirdlink= document.getElementById('first_chorus');
var thirdpara= document.querySelector('.first_chorus');
thirdlink.addEventListener('click', function(){
	thirdpara.style.display='block';
	thirdlink.style.backgroundColor=randcolor();
});


var fourthlink= document.getElementById('third_paragraph');
var fourthpara= document.querySelector('.third_paragraph');
fourthlink.addEventListener('click', function(){
	fourthpara.style.display='block';
	fourthlink.style.backgroundColor=randcolor();
});

var fifthlink= document.getElementById('fourth_paragraph');
var fifthpara= document.querySelector('.fourth_paragraph');
fifthlink.addEventListener('click', function(){
	fifthpara.style.display='block';
	fifthlink.style.backgroundColor=randcolor();
});


var sixthlink= document.getElementById('second_chorus');
var sixthpara= document.querySelector('.second_chorus');

sixthlink.addEventListener('click', function(){
	sixthpara.style.display='block';
	sixth.style.backgroundColor=randcolor();
});


// ## BONUS 3
// - Keep count of the total number of clicks, and alert the user when they get to five clicks.
function onClick() {
	var counter = 0;
	document.addEventListener('click', function(){
	 	counter ++;
	 	console.log(counter)
	 	if(counter==5){
	 		alert('You have clicked 5 times');
	 	}
	 	if(counter>=5){
	 		counter=0; //reset
	 	}
	});
}
onClick();
// ## BONUS 4
// - For each click the background color changes to a random color, then changes back after 5 seconds.

// ## BONUS 5
// - Let the user enter the name of the element to reveal through an HTML input. Use a button to submit the input. (Hint: you won't need an `event` parameter in your callback for this.)

// ## BONUS 5.5 
// - Let the user know when they've entered the name of an element that doesn't exist.