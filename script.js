// For each click, the background color changes to a random color.
// For each click the background color changes to a random color, then changes back after 5 seconds.
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Keep count of the total number of clicks, and alert the user when they get to five clicks.
var num_clicks = 0;

var other_links = document.querySelectorAll('a');
other_links.forEach(function (item, index) {

  // When the first link on the page is clicked, the background color should change to something that is not white, blue, or black.
  if (index == 0) item.addEventListener('click', function() {
    num_clicks++;
    if (num_clicks == 5) alert("You got to five clicks!");
    item.style.backgroundColor = getRandomColor();
    setTimeout(function() {item.style.backgroundColor = 'transparent';}, 5000);
  });

  // When the second through fifth links are clicked, the relevant part of the song should be displayed.
  else if (1 <= index && index <= 4) {
    var id = item.id;
    item.addEventListener('click', function() {
      num_clicks++;
      if (num_clicks == 5) alert("You got to five clicks!");
      item.style.backgroundColor = getRandomColor();
      setTimeout(function() {item.style.backgroundColor = 'transparent';}, 5000);
      var classes = document.querySelectorAll('.' + id);
      for (var j=0;j<classes.length;j++) {
        classes[j].style.display = 'block';
      }
    });
  }
  // When the last link is clicked, one line of the chorus should be displayed. Each subsequent click should display an additional line of the chorus until all 6 lines are displayed.
  else if (index == 5) {
    item.addEventListener('click', function() {
      num_clicks++;
      if (num_clicks == 5) alert("You got to five clicks!");
      item.style.backgroundColor = getRandomColor();
      setTimeout(function() {item.style.backgroundColor = 'transparent';}, 5000);
      var curr_line = document.querySelector('.' + item.id);
      if (curr_line != null) {
        curr_line.style.display = 'block';
        curr_line.setAttribute('class', item.id + '-changed');
      }
    });
  }
});

// Let the user enter the name of the element to reveal through an HTML input. Use a button to submit the input. (Hint: you won't need event for this.)
var input = document.createElement('input');
input.setAttribute('type', 'text');
document.querySelector('body').appendChild(input);

// Let the user know when they've entered the name of an element that doesn't exist.
document.querySelector('input').addEventListener('change', function() {
  var element = this.value;
  console.log(element);
  var exists = document.querySelector(element);
  if (exists == null) alert("Element does not exist");
})
