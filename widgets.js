// Fetch and display currency rates
async function fetchCurrencyRates() {
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
  
      const rubRate = data.rates.RUB; // USD to RUB rate
      const cadToUsdRate = 1 / data.rates.CAD; // CAD to USD rate (inverse of USD to CAD rate)
  
      document.getElementById('currency-rate-rub').textContent = `USD to RUB: ${rubRate.toFixed(2)}`;
      document.getElementById('currency-rate-cad').textContent = `CAD to USD: ${cadToUsdRate.toFixed(4)}`;
    } catch (error) {
      document.getElementById('currency-rate-rub').textContent = 'Failed to load RUB rate';
      document.getElementById('currency-rate-cad').textContent = 'Failed to load CAD rate';
      console.error("Error fetching currency rates:", error);
    }
  }
  
  // Fetch and display weather data
  async function fetchWeather() {
    try {
      // Get user's location via IP
      const locationResponse = await fetch('https://ipapi.co/json/');
      const locationData = await locationResponse.json();
      const city = locationData.city;
  
      // Fetch weather data for the detected city
      const weatherApiKey = '1f9a171965951ab46b2bc88eb222e6db'; // Replace with your OpenWeather API key
      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`);
      const weatherData = await weatherResponse.json();
      const temperature = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
  
      document.getElementById('weather-info').textContent = `Weather in ${city}: ${temperature}°C, ${weatherDescription}`;
    } catch (error) {
      document.getElementById('weather-info').textContent = 'Failed to load weather';
      console.error("Error fetching weather data:", error);
    }
  }
  
  // Execute both functions after the page loads
  window.addEventListener('load', async () => {
    await fetchCurrencyRates();
    await fetchWeather();
  });