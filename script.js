var clickMeFirst =  document.getElementById('first_paragraph');
clickMeFirst.addEventListener('click', function() {
	document.body.style.backgroundColor = 'rgb'+'('+252+','+238+','+212+')';
	console.log("Worked!");
});

var clickMeSecondId =  document.getElementById('second_paragraph');
var clickMeSecondClass = document.getElementsByClassName("second_paragraph");
clickMeSecondId.addEventListener('click', function() {
	clickMeSecondClass[0].style.display = "block";
	console.log("Worked!");
});

var firstChorusId =  document.getElementById('first_chorus');
var firstChorusClass = document.getElementsByClassName("first_chorus");
firstChorusId.addEventListener('click', function() {
	firstChorusClass[0].style.display = "block";
	console.log("Worked!");
});

var thirdParagraphId =  document.getElementById('third_paragraph');
var thirdParagraphClass = document.getElementsByClassName("third_paragraph");
thirdParagraphId.addEventListener('click', function() {
	thirdParagraphClass[0].style.display = "block";
	console.log("Worked!");
});

var fourthParagraphId =  document.getElementById('fourth_paragraph');
var fourthParagraphClass = document.getElementsByClassName("fourth_paragraph");
fourthParagraphId.addEventListener('click', function() {
	fourthParagraphClass[0].style.display = "block";
	console.log("Worked!");
});

var secondChorusId =  document.getElementById('second_chorus');
var secondChorusClass = document.getElementsByClassName("second_chorus");
secondChorusId.addEventListener('click', function() {
	secondChorusClass[0].style.display = "block";
	console.log("Worked!");
});