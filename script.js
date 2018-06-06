// ..........

function backgroundChangeColorRed() {
	document.body.style.background = "red";
}

var firstLink = document.querySelectorAll("a")[0];

firstLink.addEventListener("click", backgroundChangeColorRed);

// ..........

function displayLyrics() {
	this.style.display = "block"
}

var secondLink = document.querySelector("#second_paragraph");

var thirdLink = document.querySelector("#first_chorus");

secondLink.addEventListener("click", displayLyrics);

thirdLink.addEventListener("click", displayLyrics);

// ..........

var fourthPara = document.getElementsByClassName("third_paragraph");
var fourthLink = document.querySelector("#third_paragraph");

function showLyrics() {
	for (var i=0; i < fourthPara.length; i++) {
		fourthPara[i].style.display = "block";
	}
};

fourthLink.addEventListener("click", showLyrics);

// ..........

var fifthPara = document.querySelectorAll(".fourth_paragraph");
var fifthLink = document.querySelector("#fourth_paragraph");

function showLyricsOne() {
	for (var i=0; i < fifthPara.length; i++) {
		fifthPara[i].style.display = "block";
	}
};

fifthLink.addEventListener("click", showLyricsOne);

// ..........
