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

const temperature = document.getElementById("temperature");
const temp = document.getElementById("temp");

function setTemperature() {
	temperature.style.height = (33 - 0) / (50 - 0) * 100 + "%";
	temperature.dataset.value = 33 + "°C";
}
setTimeout(setTemperature, 1000);
