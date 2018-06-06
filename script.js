document.addEventListener('DOMContentLoaded',function(){

    //Set colours to use as background
    var colors = ["red", "pink", "orange", "brown", "grey", "yellow", "green", "cyan", "violet", "tomato"];

    //Function to randomize selected colors
    var randomColors = function() {
    return colors[Math.floor(Math.random()*colors.length)];
    };


    var firstLink = document.getElementById('first_paragraph');
    var firstParagraph = document.getElementsByClassName('first_paragraph');
    
    firstLink.addEventListener('click', function(){
        this.style.backgroundColor = randomColors();
    });


})