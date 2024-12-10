const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const conditions = document.getElementById("conditions");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim(); // Remove extra spaces
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name");
  }
});

async function getWeather(city) {
  const apiKey = "YOUR_API_KEY"; // Replace with your actual OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      // Update the weather information
      cityName.textContent = `City: ${data.name}`;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      conditions.textContent = `Conditions: ${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}`;
    } else {
      alert("City not found. Please try again.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("There was an error fetching the weather data. Please try again later.");
  }
}
