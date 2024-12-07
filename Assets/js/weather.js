apiKey = "0d136a737f5389a5c374b652b0185bff";
apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
searchBox = document.querySelector(".search input");
searchBtn = document.querySelector(".search button");
weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "Assets/images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "Assets/images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "Assets/images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "Assets/images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "Assets/images/mist.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";
    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather();