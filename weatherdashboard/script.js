async function getWeather(){

const city = document.getElementById("cityInput").value.trim();

const apiKey = "2acdbca743cfe4d99d65f71f84407eb2";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

document.getElementById("loading").innerText = "Loading...";
document.getElementById("error").innerText = "";

try{

const response = await fetch(url);

const data = await response.json();

document.getElementById("loading").innerText = "";

if(data.cod !== 200){
document.getElementById("error").innerText = data.message;
return;
}

document.getElementById("city").innerText = "City: " + data.name;
document.getElementById("temperature").innerText = "Temperature: " + data.main.temp + " °C";
document.getElementById("condition").innerText = "Condition: " + data.weather[0].description;
document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
document.getElementById("wind").innerText = "Wind Speed: " + data.wind.speed + " m/s";

}

catch(error){

document.getElementById("loading").innerText = "";
document.getElementById("error").innerText = "Error fetching weather data";
console.log(error);

}

}