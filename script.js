var body= document.querySelector('body');
var link=document.querySelector("#first_paragraph");
var clickLink=function(){
body.style.background="pink";
}
var clickNone=function(){
body.style.background="white";
}
link.addEventListener("mouseover",clickLink);
link.addEventListener("mouseout",clickNone);

var secondParagraph=document.querySelector(".second_paragraph");
var firstChorus=document.querySelector(".first_chorus");
var third_paragraph=document.querySelectorAll(".third_paragraph");
var fourth_paragraph=document.querySelectorAll(".fourth_paragraph");
var atags=document.querySelectorAll('a');
var Display1=function(){
	secondParagraph.style.display="block";
}
atags[1].addEventListener("click",Display1);

var Display2=function(){
	firstChorus.style.display="block";
}
atags[2].addEventListener("click",Display2);

var Display3=function(){
	for(i=0;i<third_paragraph.length;i++){
	third_paragraph[i].style.display="block";
	}	

}
atags[3].addEventListener("click",Display3);


var Display4=function(){
for(i=0;i<fourth_paragraph.length;i++){
	fourth_paragraph[i].style.display="block";
}
}
atags[4].addEventListener("click",Display4);

//Bonus1
var chorus=document.querySelector("#second_chorus");
var anything=document.querySelectorAll(".second_chorus");
var i=0;
var chorusCollect= function(){

		anything[i].style.display="block";
		i+=1;
	}

chorus.addEventListener("click",chorusCollect);

	function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function randomColor(){
	var color=["red","green","purple","orange","yellow","violet"];
	var newColor= color[Math.floor(Math.random()*(color.length-1))];
	return newColor;
}
    body.addEventListener("click",function(){
	body.style.backgroundColor= getRandomColor();
	setTimeout(function(){
	body.style.backgroundColor="white";
	},5000)
});

var counter=0;
body.addEventListener("click", function(){

	//console.log(counter);
	counter=counter+1;
	if(counter == 5){
	alert("The counter is 5");
}
	else if(counter>=5)
	{
		counter=0;
	}
	console.log(counter);
	});

// var input= document.createElement("input");
// var button=document.createElement("button");
// button.addEventListener("click", function(){
// var text=document.querySelector("input")
// var a = input;
// });
// var searchElement= function(){
// button.setAttribute("type","button");
// button.innerHTML="Submit";
// button.setAttribute("type","button");
// button.innerHTML="Submit";
// }
var input=document.createElement("input");
var entry= document.createElement("input")
entry.setAttribute("id","entry");
input.setAttribute("type","Submit");
input.addEventListener("click", function(){
var x= document.getElementById("entry");
store= document.querySelector("#"+"x")
if(store == true)
{
	alert(store+" exists")
}
else{
	alert(store+ " does not exists")
}
});
body.appendChild(entry);
body.appendChild(input);












//Bonus 2
//For every click the background color changes to a random color
//Random colour function
// var counter=0;
// function getRandomColour() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
//   body.style.backgroundColor
// }
// body.addEventListener("click",randomColour)
// {
// 	counter++;
// 	if(counter ==5){
// 		alert("Hey you have clicked 5 times")
// 	}
// }

// click to generate random color, then
 // turn back to white after 5 secs
	// sixthLink.addEventListener("click", function() {
 //  	body.style.backgroundColor = getRandomColor();
 //  	setTimeout(function() {
	// 	body.style.backgroundColor = "white";
	// }, 5000)
	// })




