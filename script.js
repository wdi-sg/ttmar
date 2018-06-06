// When the first link on the page is clicked, the background color should change to something that is not white, blue, or black.

let randomBrightColor = function() {
    let colour = "hsl(" + 360 * Math.random() + ',' + (25 + 70 * Math.random()) + '%,' + (85 + 10 * Math.random()) + '%)';
    return colour;
}

let returnOriginalColor = function() {
    firstAnchor.style.backgroundColor = "white";
}
// false until its already been called onclick
let resetColor;

let firstAnchor = document.getElementById("first_paragraph");

let changeBackgroundColor = function() {
    this.style.backgroundColor = randomBrightColor();
    if (resetColor) {
        clearTimeout(resetColor);
    }
    resetColor = setTimeout(returnOriginalColor, 5000);
}

firstAnchor.addEventListener("click", changeBackgroundColor);

// When the second through fifth links are clicked, the relevant part of the song should be displayed.

// the element to click
let secondAnchor = document.getElementById("second_paragraph");
let thirdAnchor = document.getElementById("first_chorus");
let fourthAnchor = document.getElementById("third_paragraph");
let fifthAnchor = document.getElementById("fourth_paragraph");
let elementToClick = [secondAnchor,thirdAnchor,fourthAnchor,fifthAnchor];

// the element to change display
let secondDiv = document.querySelector(".second_paragraph");
let thirdDiv = document.querySelector(".first_chorus");
let fourthDiv = document.querySelector(".third_paragraph");
let fifthDiv = document.querySelector(".fourth_paragraph");
let divToChange = [secondDiv,thirdDiv,fourthDiv,fifthDiv];

let displayLyrics = function() {
    let currentDivClass = "." + this.id;
    let currentDivList = document.querySelectorAll(currentDivClass);

    currentDivList.forEach(function(div) {
        if (div.style.display == "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    })
}
// loop through the arrays to change, affect only the current array
elementToClick.forEach(function(element) {
    element.addEventListener("click", displayLyrics);
})

// When the last link is clicked, one line of the chorus should be displayed.
// Each subsequent click should display an additional line of the chorus until all 6 lines are displayed.

// the element to click
let sixthAnchor = document.getElementById("second_chorus");

// the element ARRAY to change display (use querySelectorAll to get array)
let sixthDiv = document.querySelectorAll(".second_chorus");
let counter = 0;

let displayLine = function() {
    if (counter < 6) {
        sixthDiv[counter].style.display = "block";
        counter ++;
        if (counter == 5) {
            alert("You've clicked five times!");
        };
    } else if (counter == 6) {
        for (i = 0; i < sixthDiv.length; i++) {
            sixthDiv[i].style.display = "none";
        }
        // reset counter to 0
        counter = 0;
    }
}

// when sixthAnchor is clicked
sixthAnchor.addEventListener("click", displayLine);

// For each click, the background color changes to a random color.
// Keep count of the total number of clicks, and alert the user when they get to five clicks.
// For each click the background color changes to a random color, then changes back after 5 seconds.

let returnOriginalColorTwo = function() {
    sixthAnchor.style.backgroundColor = "white";
}
// false until its already been called onclick
let resetColorTwo;

let changeBackgroundColorTwo = function() {
    this.style.backgroundColor = randomBrightColor();
    if (resetColorTwo) {
        clearTimeout(resetColorTwo);
    }
    resetColorTwo = setTimeout(returnOriginalColorTwo, 5000);
}

sixthAnchor.addEventListener("click", changeBackgroundColorTwo);

// Let the user enter the name of the element to reveal through an HTML input.
// Use a button to submit the input. (Hint: you won't need an event parameter in your callback for this.)
// Let the user know when they've entered the name of an element that doesn't exist.

let input = document.createElement("input");
input.id = "userinput";
input.placeholder = "Enter an element name.";
document.body.appendChild(input);

let checkInput = function(event) {
    let element = event.target.value;

    // if the querySelector of element doesnt exist, it will return an empty array with length of 0
    if (document.querySelectorAll(element).length > 0) {
        alert("This element exists!");
    } else {
        alert("This element doesn't exist!");
    }
}

input.addEventListener("change", checkInput);