const apiKey = '56794dd53521c8ffee8c405efad0d78a'

const searchButton = document.getElementById('search-btn')
const currentWeather = document.getElementById('current-weather')
const fiveDay = document.getElementById('five-day')

searchButton.addEventListener('click', function() {
    let cityName = document.getElementById('city-name').value
    console.log(cityName)
});