// Initialize weather object
const weather = new Weather('Sydney', 'AU');
const ui = new UI();

// Get weather con DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather
      .getWeather()
      .then((results) => {
        console.log(results);
        ui.paint(results);
      })
      .catch((err) => console.log(err));
}

