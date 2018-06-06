var first = document.getElementById('first_paragraph');
var second = document.getElementById('second_paragraph');
var firstChorus = document.getElementById('first_chorus')
var third = document.getElementById('third_paragraph');
var fourth = document.getElementById('fourth_paragraph');
var secondChorus = document.getElementById('second_chorus');

var secondText = document.getElementsByClassName('second_paragraph');
var firstChorusText = document.getElementsByClassName('first_chorus');
var thirdText = document.getElementsByClassName('third_paragraph');
var fourthText = document.getElementsByClassName('fourth_paragraph');
var secondChorusText = document.getElementsByClassName('second_chorus');

function doSomething () {

	first.addEventListener('click', function () {
		first.style.backgroundColor = 'red';
	})

	//displays the second paragraph upon clicking second link
	second.addEventListener('click', function () {
		for (var i = 0; i < secondText.length; i++) {
			secondText[i].style.display = 'inline';
		}
	})

	//displays the firstChorus paragraph upon clicking third link
	firstChorus.addEventListener('click', function () {
		for (var i = 0; i < firstChorusText.length; i++) {
			firstChorusText[i].style.display = 'inline';
		}
	})

	//displays the third paragraph upon clicking fourth link
	third.addEventListener('click', function () {
		for (var i = 0; i < thirdText.length; i++) {
			thirdText[i].style.display = 'inline';
		}
	})

	//displays the fourth paragraph upon clicking fifth link
	fourth.addEventListener('click', function () {
		for (var i = 0; i < fourthText.length; i++) {
			fourthText[i].style.display = 'inline';
		}
	})

	//displays the subsequent lines of the secondChorus upon clicking
	var i = 0;
	console.log(secondChorusText);
	secondChorus.addEventListener('click', function () {	
		if (i<secondChorusText.length){
			secondChorusText[i].style.display = 'block';
			i ++;
		} else {
			alert('you have reached the end of the secondChorus!');
		}	
	})
}

document.addEventListener('DOMContentLoaded', doSomething)