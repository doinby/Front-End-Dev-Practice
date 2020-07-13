// Initialize weather object
const weather = new Weather('Sydney', 'AU');

// Get weather con DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather
      .getWeather()
      .then((results) => {
        console.log(results);
      })
      .catch((err) => console.log(err));
}

