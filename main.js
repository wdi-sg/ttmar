// color rgb(180, 108, 173)
function pageClick(){
  var y = Math.floor(Math.random() * (color.length - 1))
  //https://stackoverflow.com/questions/30542515/math-random-in-regards-to-arrays
  // array already defined outside function, y is the result of the randomizer, assign y to color[y] which out puts the rgb values for the selector below
  document.body.style.background = color[y];
  cCount++;
  clickCounter();
  setTimeout(resetBg, 5000);
  //call resetBg and set it to run when it hits 5seconds
  //weirdly it fires off whenever i click, so if i click it multiple times it ignores the timer and recognizes the original timer when i clicked
}
function displaySecond(){
  document.querySelector(".second_paragraph").removeAttribute('style');
  pageClick();
}
function displayChorus(){
  var store = document.querySelectorAll(".first_chorus");
  pageClick();
  for (var i = 0; i < store.length; i++) {
    store[i].removeAttribute('style');
  }
}
function displayVerse3(){
  var store = document.querySelectorAll(".third_paragraph");
  pageClick();
  for (var i = 0; i < store.length; i++) {
    store[i].removeAttribute('style');
  }
}
function displayVerse4(){
  var store = document.querySelectorAll(".fourth_paragraph");
  pageClick();
  for (var i = 0; i < store.length; i++) {
    store[i].removeAttribute('style');
  }
}
function displayChorus2(){
  var store = document.querySelectorAll(".second_chorus");
  pageClick();
  for(var i = 0; i < store.length; i++){
    if(store[i].hasAttribute("style")){
      store[i].removeAttribute('style');
      break;
      //wtf??
      //loops thru the array if condition is true, removestyle and break the loop
    }
  }
}

function clickCounter(){
  if (cCount == 5) {
    alert('You clicked 5 times!')
  }
}
function resetBg(){
  document.body.style.background = "white";
}

function createInput(){
  var x = document.createElement("input");
  x.id = "input";
  var y = document.createElement("button");
  y.innerHTML = "Press";
  document.body.appendChild(x);
  document.body.appendChild(y);
}
createInput();

// function checkElement(){
//   var userInput = document.getElementById("input").value;
//   var checkInput = document.body.contains(userInput);
//   if(userInput.value){
//
//   }
// }
//check if element exists and if it does, alert(yes), else alert(no)
document.body.style.fontFamily = "sans-serif";
//make it look more readable i guess
firstLink.addEventListener('click', pageClick);
secondVerse.addEventListener('click', displaySecond);
firstChorus.addEventListener('click', displayChorus);
thirdVerse.addEventListener('click', displayVerse3);
fourthVerse.addEventListener('click', displayVerse4);
secondChorus.addEventListener('click', displayChorus2);
