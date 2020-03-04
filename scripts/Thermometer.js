const units = {
	Celcius: "°C",
	Fahrenheit: "°F"
};

const config = {
	minTemp: -20,
	maxTemp: 50,
	unit: "Celcius"
};



// Change temperature
var heat= 38

const temperature = document.getElementById("temperature");
const temp = document.getElementById("temp");

function setTemperature() {
	temperature.style.height = (heat - 0) / (50 - 0) * 100 + "%";
	temperature.dataset.value = heat + "°C";
}
setTimeout(setTemperature, 1000);

