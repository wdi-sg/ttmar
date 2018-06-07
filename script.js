
var firstLink = document.getElementById('first_paragraph');
var secondLink = document.getElementById('second_paragraph');
var thirdLink = document.getElementById('first_chorus');
var fourthLink = document.getElementById('third_paragraph');
var fifthLink = document.getElementById('fourth_paragraph');
var sixthLink = document.getElementById('second_chorus');

var colorList = ['red', 'green', 'pink', 'purple', 'yellow', 'orange'];

// function randomC(arr){
// 	var arrColor = Math.floor(Math.random(arr)*arr.length+1);
// }

function randomC(arr) {
	var arrC = arr[Math.floor(Math.random() * arr.length)];
	return arrC;
}

function backgroundChange() {
	firstLink.style.backgroundColor = randomC(colorList);
}


firstLink.addEventListener("click",backgroundChange);

secondLink.addEventListener("click", function() {
	var idLink = this.id;
document.getElementsByClassName(idLink)[0].style.display = 'block';
})

thirdLink.addEventListener("click", function() {
	var idLink = this.id;
document.getElementsByClassName(idLink)[0].style.display = 'block';
})

fourthLink.addEventListener("click", function() {
	var idLink = this.id;
for (var i=0; i<document.getElementsByClassName(idLink).length; i++)	
document.getElementsByClassName(idLink)[i].style.display = 'block';
})

fifthLink.addEventListener("click", function() {
	var idLink = this.id;
for (var i=0; i<document.getElementsByClassName(idLink).length; i++)	
document.getElementsByClassName(idLink)[i].style.display = 'block';
})

