const weatherURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=e873668f0886def8ce1ef00578214266";

async function getWeather() {
  
  try {
  const response = await fetch(weatherURL);
  if (response.ok) {
    let weather = await response.json();
   
    console.log(weather);
    displayWeather(weather);
      } else {
        throw Error(await response.text());
      }
      } catch (error) {
        console.log(error);
      }
};

getWeather();

function displayWeather(weather) {
  
  document.querySelector("#currentTemp").textContent = Math.round(weather.main.temp,0);
  document.querySelector("#condition").textContent =weather.weather[0].description;
  document.querySelector("#humidity").textContent =weather.main.humidity;
};



const forecastURL = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=33.1581&lon=-117.350&cnt=5&units=imperial&appid=e873668f0886def8ce1ef00578214266";

async function getForecast() {
  try{ 
  const response = await fetch(forecastURL);
    if (response.ok) {
      let forecast = await response.json();
      console.log(forecast);
      displayForecast(forecast);
      } else {
        throw Error(await response.text());
      }
      } catch (error) {
        console.log(error);
      }
};
  
getForecast();

function displayForecast (forecast) {

        
    const onedayforecast = forecast.list[1];
    const twodayforecast = forecast.list[2];
    const threedayforecast = forecast.list[3];
    
    const dayOne = dayForecast(forecast.list[1].dt);
    const dayTwo = dayForecast(forecast.list[2].dt);
    const dayThree = dayForecast(forecast.list[3].dt);
    
    document.querySelector('#day1').textContent = dayOne;
    document.querySelector('#forecastDay1').textContent = Math.round(onedayforecast.temp.day, 0);
    document.querySelector('#day2').textContent = dayTwo;
    document.querySelector('#forecastDay2').textContent = Math.round(twodayforecast.temp.day, 0);
    document.querySelector('#day3').textContent = dayThree;
    document.querySelector('#forecastDay3').textContent = Math.round(threedayforecast.temp.day, 0);
    
};

function dayForecast (i) {

    let forecastDays = new Date(i * 1000);
    let forecastDay = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(forecastDays);

    return forecastDay;
};
