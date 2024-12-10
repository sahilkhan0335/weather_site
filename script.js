// Weather Data Placeholder
const placeholderData = {
    city: "Placeholder City",
    temperature: "25°C",
    conditions: "Clear Sky",
};

// Elements
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const conditions = document.getElementById("conditions");

// Update Weather Information
const updateWeatherInfo = (data) => {
    cityName.textContent = `City: ${data.city}`;
    temperature.textContent = `Temperature: ${data.temperature}`;
    conditions.textContent = `Conditions: ${data.conditions}`;
};

// Search Button Event Listener
searchBtn.addEventListener("click", () => {
    const inputCity = cityInput.value.trim();
    if (inputCity) {
        updateWeatherInfo({
            city: inputCity,
            temperature: placeholderData.temperature,
            conditions: placeholderData.conditions,
        });
    } else {
        alert("Please enter a city name.");
    }
});

// Initial Data Load
updateWeatherInfo(placeholderData);