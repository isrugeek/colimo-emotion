//text type animation
var string = "Hello friends. I'm Colimo. I'm an Emmotion Translator.";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 120);
})();