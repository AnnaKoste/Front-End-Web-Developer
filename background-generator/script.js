var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRundom() {
	var letters = '0123456789ABCDEF';
  var colorR1 = '#';
	var colorR2 = '#';
  for (var i = 0; i < 6; i++) {
    colorR1 += letters[Math.floor(Math.random() * 16)];
		colorR2 += letters[Math.floor(Math.random() * 16)];
  }
	color1.value = colorR1;
	color2.value = colorR2;
	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRundom);
