const apiKey = "56794dd53521c8ffee8c405efad0d78a";

const searchButton = document.getElementById("search-btn");
const currentWeather = document.getElementById("current-weather");
const fiveDay = document.getElementById("five-day");

function getCoordinates(cityName) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(url, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((apiData) => {
      console.log(apiData);
      let lat = apiData.coord.lat;
      let lon = apiData.coord.lon;
      getWeather(lat, lon)
    });
}

function getWeather(lat, lon) {
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${apiKey}`;
  fetch(url, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((apiData) => {
      console.log(apiData);
    });

}

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  let cityName = document.getElementById("city-name").value;
  console.log(cityName);
  getCoordinates(cityName);
});
