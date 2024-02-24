export async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://goweather.herokuapp.com/weather/${city}`
    );
    const result = await response.text();
    const weatherresult = await JSON.parse(result)
    const data = `----- City: ${city} -----\nTemperature: ${weatherresult.temperature}\nWind: ${weatherresult.wind}\n\n>>>> Forecast <<<<\n-- Day 1 --\nTemperature: ${weatherresult.forecast[0].temperature}\nWind: ${weatherresult.forecast[0].wind}\n-- Day 2 --\nTemperature: ${weatherresult.forecast[1].temperature}\nWind: ${weatherresult.forecast[1].wind}\n-- Day 3 --\nTemperature: ${weatherresult.forecast[2].temperature}\nWind: ${weatherresult.forecast[2].wind}`;
    console.log(data);
  } catch (e) {
    console.log("Error fetch weather data:", e.message);
  }
}
