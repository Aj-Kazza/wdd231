const currentTemp = document.querySelector("#current-temp");
const weatherFigure = document.querySelector(".weather-icon");
const captionDesc = document.querySelector("figcaption");

const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#wind-chill");

// Tarawa coordinates
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Tarawa,KI&units=metric&appid=23707f534900e445879dd8bbd2b7371f";

const forecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=1.329&lon=172.979&units=metric&appid=23707f534900e445879dd8bbd2b7371f";

async function apiFetch() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

async function apiForecast() {
  try {
    const response = await fetch(forecastURL);

    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  const desc = data.weather[0].description;

  // Create image
  const weatherImg = document.createElement("img");

  weatherImg.setAttribute("src", iconsrc);
  weatherImg.setAttribute("alt", desc);

  // Create caption
  const caption = document.createElement("figcaption");

  caption.textContent = desc;

  // Clear old content
  weatherFigure.innerHTML = "";

  // Add elements into figure
  weatherFigure.appendChild(weatherImg);
  weatherFigure.appendChild(caption);
}

function displayForecast(data) {
  day1.textContent = `${data.list[7].main.temp.toFixed(1)}°C`;

  day2.textContent = `${data.list[15].main.temp.toFixed(1)}°C`;

  day3.textContent = `${data.list[23].main.temp.toFixed(1)}°C`;
}

function calculateWindChill(temp, speed) {
  // Wind chill only applies below 10°C and above 4.8 km/h
  if (temp <= 10 && speed > 4.8) {
    const chill =
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(speed, 0.16) +
      0.3965 * temp * Math.pow(speed, 0.16);

    return `${chill.toFixed(1)} °C`;
  }

  return "N/A";
}

apiFetch();
apiForecast();
