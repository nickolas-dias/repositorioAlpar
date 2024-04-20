class WeatherView {
  constructor() {
    this.cityInput = document.getElementById('city-input');
    this.searchBtn = document.getElementById('search');
    this.weatherData = document.getElementById('weather-data');
    this.cityName = document.getElementById('city-name');
    this.temperature = document.getElementById('temperature');
    this.description = document.getElementById('description');
    this.weatherIcon = document.getElementById('weather-icon');
    this.humidity = document.getElementById('humidity');
    this.windSpeed = document.getElementById('wind-speed');
    this.errorMessage = document.getElementById('error-message');
    this.loader = document.getElementById('loader');
  }

  bindSearch(handler) {
    this.searchBtn.addEventListener('click', () => {
      const city = this.cityInput.value.trim();
      if (city) {
        handler(city);
      } else {
        this.showError('Por favor, digite o nome da cidade.');
      }
    });

    this.cityInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const city = this.cityInput.value.trim();
        if (city) {
          handler(city);
        } else {
          this.showError('Por favor, digite o nome da cidade.');
        }
      }
    });
  }

  displayWeatherData(data) {
    this.cityName.textContent = data.name;
    this.temperature.textContent = `${data.main.temp}°C`;
    this.description.textContent = data.weather[0].description;
    this.weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    this.humidity.textContent = `Humidade: ${data.main.humidity}%`;
    this.windSpeed.textContent = `Velocidade do vento: ${data.wind.speed} m/s`;
    this.weatherData.classList.remove('hide');
  }

  showError(message) {
    this.errorMessage.textContent = message;
    this.errorMessage.classList.remove('hide');
  }

  showLoader() {
    this.loader.classList.remove('hide');
  }

  hideLoader() {
    this.loader.classList.add('hide');
  }
}