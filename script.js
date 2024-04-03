const apiKey = "228eba0103639eccae1daf45748ff254c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=28eba0103639eccae1daf45748ff254c&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search Button");
const weatherIcon=document.querySelector(".weather-icon");



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "clouds.png";
        } 
        else if (data.weather[0].main === "Haze") {
            weatherIcon.src = "haze.png";}
            else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "clear.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "drizzle.png";
        } else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "snow.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

