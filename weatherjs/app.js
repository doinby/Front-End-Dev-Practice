// Initialize storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Initialize weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Initialize ui elements
const ui = new UI();

// Get weather con DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  
  // Change location
  weather.changeLocation(city, country);

  // Set location in local storage
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
    weather
      .getWeather()
      .then((results) => {
        console.log(results);
        ui.paint(results);
      })
      .catch((err) => console.log(err));
}

