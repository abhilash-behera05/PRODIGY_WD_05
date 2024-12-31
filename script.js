let cityName = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let weather = document.querySelector(".weather");
let error = document.querySelector(".error");


const apiKey = "4d118f724b89177e35faf87e49330bc9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInp = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        error.style.display = "block";
        weather.style.display = "none";
    } else {
        var data = await response.json();

        cityName.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/hr";
        weather.style.display = "block";

        if (data.weather[0].main === "Clouds") {
            icon.src = "images/clouds.png";
        }
        else if (data.weather[0].main === "Clear") {
            icon.src = "images/clear.png";
        }
        else if (data.weather[0].main === "Rain") {
            icon.src = "images/rain.png";
        }
        else if (data.weather[0].main === "Drizzle") {
            icon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main === "Mist") {
            icon.src = "images/mist.png";
        }
        error.style.display = "none";
        weather.style.display = "block";
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchInp.value);
})
