class WeatherModel {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  }

  async fetchWeatherData(city) {
    try {
      const response = await fetch(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=pt_br`);
      if (!response.ok) {
        throw new Error('Cidade não encontrada. Por favor, tente novamente.');
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}