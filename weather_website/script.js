document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '485701a293a91fc3c942fd74e47acca1';
    const searchButton = document.getElementById("search-button");
    const cityInput = document.getElementById("city-input");
    const weatherContainer = document.getElementById("weather-container");

    searchButton.addEventListener("click", () => {
        const cityName = cityInput.value;
        if (cityName) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === 200) {
                        displayWeather(data);
                    } else {
                        weatherContainer.innerHTML = `<p>${data.message}</p>`;
                    }
                })
                .catch(error => console.error('Error fetching weather data:', error));
        }
    });

    function displayWeather(data) {
        const { name, main, weather } = data;
        const weatherHTML = `
            <h2>Weather in ${name}</h2>
            <p><strong>Temperature:</strong> ${main.temp}°C</p>
            <p><strong>Humidity:</strong> ${main.humidity}%</p>
            <p><strong>Condition:</strong> ${weather[0].description}</p>
        `;
        weatherContainer.innerHTML = weatherHTML;
    }
});
