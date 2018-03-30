//q1
document.getElementById("first_paragraph").addEventListener("click", function() {
  document.querySelector(".first_paragraph").style["background-color"] = "blue";
})

//q2
var secondToFifth = [ "second_paragraph", "first_chorus", "third_paragraph", "fourth_paragraph" ]

secondToFifth.forEach(function(element) {
  document.getElementById(element).addEventListener("click", function() {
    document.querySelector("." + element).style.display = "block";
  })
})

//q3, q4
var linkSixCounter = 1;
var secondChorusArr = document.querySelectorAll(".second_chorus");
var randomColor = function() {
  var hex = "1234567890ABCDEF";
  var color = "#"
  for (var i = 0; i < 6; i++) {
    var randomNum = Math.floor(Math.random() * 16);
    color += hex[randomNum];
  }
  return color;
}
function resetColor(counter) {
  return function() {
    secondChorusArr[counter].style["background-color"] = "white";
  }
}

document.getElementById("second_chorus").addEventListener("click", function() {
  if (linkSixCounter <= 6) {
    secondChorusArr[linkSixCounter-1].style.display = "block";
    secondChorusArr[linkSixCounter-1].style["background-color"] = randomColor();
    // callback executes straightaway but a function is returned
    // function returned will only execute after 5s
    setTimeout(resetColor(linkSixCounter-1), 5000);
    console.log(linkSixCounter);
    secondChorusArr[linkSixCounter-1].innerHTML += ' x' + linkSixCounter;
    linkSixCounter++;
  } else {
    alert("You've clicked it 6 times!");
  }
})