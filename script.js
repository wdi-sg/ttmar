var clickMeFirst =  document.getElementById('first_paragraph');
clickMeFirst.addEventListener('click', function() {
	document.body.style.backgroundColor = 'rgb'+'('+132+','+132+','+132+')';
});

var clickMeSecondId =  document.getElementById('second_paragraph');
var clickMeSecondClass = document.getElementsByClassName("second_paragraph");
clickMeSecondId.addEventListener('click', function() {
	clickMeSecondClass[0].style.display = "block";
});

var firstChorusId =  document.getElementById('first_chorus');
var firstChorusClass = document.getElementsByClassName("first_chorus");
firstChorusId.addEventListener('click', function() {
	firstChorusClass[0].style.display = "block";
});

var thirdParagraphId =  document.getElementById('third_paragraph');
var thirdParagraphClass = document.getElementsByClassName("third_paragraph");
thirdParagraphId.addEventListener('click', function() {
	for(var i = 0; i < thirdParagraphClass.length; i++)
	thirdParagraphClass[i].style.display = "block";
});

var fourthParagraphId =  document.getElementById('fourth_paragraph');
var fourthParagraphClass = document.getElementsByClassName("fourth_paragraph");
fourthParagraphId.addEventListener('click', function() {
	for(var i = 0; i < fourthParagraphClass.length; i++)
	fourthParagraphClass[i].style.display = "block";
});

var secondChorusId =  document.getElementById('second_chorus');
var secondChorusClass = document.getElementsByClassName("second_chorus");
count = 0;
secondChorusId.addEventListener('click', function() {
	if (count < secondChorusClass.length) {
		secondChorusClass[count].style.display = "block";
		count += 1;
	}
});