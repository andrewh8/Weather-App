import './style.css';

// cache the DOM
const enterCity = document.querySelector('#selectCity');
const tempDisplay = document.querySelector('#temperature');
const weatherDisplay = document.querySelector('#weather');

// request info from weather api
async function getWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f86554d8ab033670e2e64846f5c594f5`, { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData);
    tempDisplay.innerHTML = weatherData.main.temp;
    weatherDisplay.innerHTML = weatherData.weather[0].main;
  } catch {
    alert('Error 404: City Not Found');
  }
}

function getCity() {
  const city = prompt('Enter a City');
  getWeather(city);
}

enterCity.addEventListener('click', getCity);
