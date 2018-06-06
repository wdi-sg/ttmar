//Q1
var firstPara = document.getElementById('first_paragraph');
var colorChange = function(){
	firstPara.style.backgroundColor = "Green";
}
firstPara.addEventListener('click', colorChange);


//Q2
var para2Lyrics = function(){
	var second_paragraph = document.getElementsByClassName('second_paragraph');
	second_paragraph[0].style.display = "block"
}
var clickMeSecond = document.getElementById('second_paragraph');
clickMeSecond.addEventListener('click', para2Lyrics);

var firstChorusLyrics = function(){
	var firstChorus = document.getElementsByClassName('first_chorus');
	firstChorus[0].style.display = "block";
}
var clickMeThird = document.getElementById('first_chorus');
clickMeThird.addEventListener('click', firstChorusLyrics);

var third_paragraph = function(){
	var third_paragraph = document.getElementsByClassName("third_paragraph");
	for (var i = 0; i < third_paragraph.length; i++){
		third_paragraph[i].style.display = "block";
	}
}
var clickMeFourth = document.getElementById("third_paragraph");
clickMeFourth.addEventListener('click', third_paragraph);

var fourth_paragraph = function(){
	var fourth_paragraph = document.getElementsByClassName("fourth_paragraph");
	for(var i = 0; i < fourth_paragraph.length; i++){
		fourth_paragraph[i].style.display = "block";
	}
}
var clickMeFifth = document.getElementById("fourth_paragraph");
clickMeFifth.addEventListener('click', fourth_paragraph);


