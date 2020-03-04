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
var bullshit = 47

const temperature = document.getElementById("temperature");
const temp = document.getElementById("temp");

function setTemperature() {
	temperature.style.height = (bullshit - 0) / (50 - 0) * 100 + "%";
	temperature.dataset.value = bullshit + "°C";
}
setTimeout(setTemperature, 1000);

