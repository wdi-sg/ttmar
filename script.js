document.addEventListener('DOMContentLoaded',function(){

    var everywhere = document.body;
    var clickCounter = function() {
        everywhere.addEventListener('click', function(){
            var clicks = event.detail;
            if (clicks == 5) {
                alert("You have clicked 5 times!");
            }
        })
    };
    clickCounter();

    //Set colours to use as background
    var colors = ["red", "pink", "orange", "brown", "grey", "green", "cyan", "violet", "tomato"];

    //Function to randomize selected colors
    var randomColors = function() {
    return colors[Math.floor(Math.random()*colors.length)];
    };


    var firstLink = document.getElementById('first_paragraph');
    var firstParagraph = document.querySelector('.first_paragraph');
    var secondLink = document.getElementById('second_paragraph');
    var secondParagraph = document.querySelector('.second_paragraph');
    var thirdLink = document.getElementById('first_chorus');
    var firstChorus = document.querySelector('.first_chorus');
    var fourthLink = document.getElementById('third_paragraph');
    var thirdParagraph = document.querySelector('.third_paragraph');
    var fifthLink = document.getElementById('fourth_paragraph');
    var fourthParagraph = document.querySelector('.fourth_paragraph');


    firstLink.addEventListener('click', function(){
        firstParagraph.style.backgroundColor = randomColors();
    });
    
    secondLink.addEventListener('click', function(){
        secondParagraph.style.display = "block";
        secondParagraph.style.backgroundColor = randomColors();
    });

    thirdLink.addEventListener('click', function(){
        firstChorus.style.display = "block";
        firstChorus.style.backgroundColor = randomColors();
    });

    fourthLink.addEventListener('click', function(){
        thirdParagraph.style.display = "block";
        thirdParagraph.style.backgroundColor = randomColors();
    });    

    fifthLink.addEventListener('click', function(){
        fourthParagraph.style.display = "block";
        fourthParagraph.style.backgroundColor = randomColors();
    });

});