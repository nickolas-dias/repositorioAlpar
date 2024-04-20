document.addEventListener('DOMContentLoaded', () => {
  const apiKey = '7e8703e2b4ec6f921834c27ebadcdf86';
  const model = new WeatherModel(apiKey);
  const view = new WeatherView();
  const controller = new WeatherController(model, view);
});