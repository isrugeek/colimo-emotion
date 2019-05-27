


//text question animation
var string = "How does it look to have fun?";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 25);
})();



//take response

function takeResponse(response){
	//text response animation
	var stringResponse = response;
	var strResponse = stringResponse.split("");
	var el = document.getElementById('str-response');
	(function animate() {
	strResponse.length > 0 ? el.innerHTML += strResponse.shift() : clearTimeout(running); 
	var running = setTimeout(animate, 90);
	})();
}

function deleteResponse () {
    var el = document.getElementById('str-response');
    console.log(el.innerHTML.length);
    console.log(el.innerHTML);
    if (el.innerHTML.length > 0) {
      el.innerHTML = "";
      console.log(el.innerHTML);
    } 
}




//Canvas
window.onload = function () {



  // Definitions
  var canvas = document.getElementById("paint-canvas");
  var context = canvas.getContext("2d");
  var boundings = canvas.getBoundingClientRect();

  // Specifications
  var mouseX = 0;
  var mouseY = 0;
  context.strokeStyle = 'black'; // initial brush color
  context.lineWidth = 3; // initial brush width
  var isDrawing = false;


  // Handle Colors
  var colors = document.getElementsByClassName('colors')[0];

  colors.addEventListener('click', function(event) {
    context.strokeStyle = event.target.value || 'black';
  });

  // Handle Brushes
  var brushes = document.getElementsByClassName('brushes')[0];

  brushes.addEventListener('click', function(event) {
    context.lineWidth = event.target.value || 1;
  });

  // Mouse Down Event
  canvas.addEventListener('mousedown', function(event) {
    setMouseCoordinates(event);
    isDrawing = true;

    playAudio();

    setTimeout(function(){ deleteResponse(); }, 5000 );

    

    // Start Drawing
    context.beginPath();
    context.moveTo(mouseX, mouseY); 



  });

  // Mouse Move Event
  canvas.addEventListener('mousemove', function(event) {
    setMouseCoordinates(event);

    if(isDrawing){
      context.lineTo(mouseX, mouseY);
      context.stroke();

    }
  });

  // Mouse Up Event
  canvas.addEventListener('mouseup', function(event) {
    setMouseCoordinates(event);
    isDrawing = false;
    pauseAudio();


  var feelingArray = ["boring", "fun", "sad", "sexy", "surprising", "intelligent"];
  var colorAray = ["#9372b1", "#fdcb00", "#2981c3", "#bc6562", "#0da3d2"];

  var rand = feelingArray[Math.floor(Math.random() * feelingArray.length)];

    setTimeout(function(){ takeResponse("Sounds " +rand); }, 5000);



    
  });

  // Handle Mouse Coordinates
  function setMouseCoordinates(event) {
    mouseX = event.clientX - boundings.left;
    mouseY = event.clientY - boundings.top;

  }

  // Handle Clear Button
  var clearButton = document.getElementById('clear');

  clearButton.addEventListener('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Handle Save Button
  var saveButton = document.getElementById('save');

  saveButton.addEventListener('click', function() {
    var imageName = prompt('Please enter image name');
    var canvasDataURL = canvas.toDataURL("images/imageName.png");
    var a = document.createElement('a');
    a.href = canvasDataURL;
    a.download = imageName || 'drawing';
    a.click();
  });


  //Audio
  var x = document.getElementById("generatedAudio"); 

  function playAudio() { 
    x.play(); 
  } 
  function pauseAudio() { 
    x.pause(); 
  } 


  var y = document.getElementById("questionAudio");
  





};



