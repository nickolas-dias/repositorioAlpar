class WeatherController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindSearch(this.handleSearch.bind(this));
  }

  async handleSearch(city) {
    this.view.showLoader();
    try {
      const data = await this.model.fetchWeatherData(city);
      this.view.displayWeatherData(data);
    } catch (error) {
      this.view.showError(error.message);
    } finally {
      this.view.hideLoader();
    }
  }
}