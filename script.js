$(document).ready(function() {
  var totalNumberOfClicks = 0;

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
  };

  function getColorExceptBlueOrBlack() {
    var colors = [
      "red",
      "green",
      "yellow",
      "grey",
      "pink"
    ];

    var randomNumber = Math.floor(Math.random() * colors.length);

    return colors[randomNumber];
  }

  function alertClicks(click) {
    if (click == 5) {
      alert("You have clicked 5 times");
    };
  };

  $("#first_paragraph").click(function() {
    $("body").css("background-color", getColorExceptBlueOrBlack() );
    $("body").css("background-color", getRandomColor() );

    totalNumberOfClicks += 1;
    alertClicks(totalNumberOfClicks);
  });

  $("#second_paragraph").click(function() {
    $("div.second_paragraph").slideDown(1000);
    $("body").css("background-color", getRandomColor() );

    totalNumberOfClicks += 1;
    alertClicks(totalNumberOfClicks);
  });

  $("#first_chorus").click(function() {
    $("div.first_chorus").fadeIn(1000);
    $("body").css("background-color", getRandomColor() );

    totalNumberOfClicks += 1;
    alertClicks(totalNumberOfClicks);
  });

  $("#third_paragraph").click(function() {
    $("p.third_paragraph").show();
    $("body").css("background-color", getRandomColor() );

    totalNumberOfClicks += 1;
    alertClicks(totalNumberOfClicks);
  });

  $("#fourth_paragraph").click(function() {
    $("p.fourth_paragraph").slideToggle(1500);
    $("body").css("background-color", getRandomColor() );

    totalNumberOfClicks += 1;
    alertClicks(totalNumberOfClicks);
  });

  var numberOfClicks = 0;
  $("#second_chorus").click(function() {
    var allThePTags = $("p.second_chorus");
    $(allThePTags[numberOfClicks]).fadeIn(1500);

    numberOfClicks += 1;
    $("body").css("background-color", getRandomColor() );

    totalNumberOfClicks += 1;
    alertClicks(totalNumberOfClicks);
  });

});
