import { OPENWEATHERMAP_API_KEY } from '../constants';

export async function getWeatherByCityName(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHERMAP_API_KEY}`,
    );

    return await response.json();
  } catch (err) {
    throw new Error(`Ошибка HTTP: ${err}`);
  }
}

export async function getWeatherByCoordinates(lt, ln) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lt}&lon=${ln}&units=metric&appid=${OPENWEATHERMAP_API_KEY}`,
    );

    return await response.json();
  } catch (err) {
    throw new Error(`Ошибка HTTP: ${err}`);
  }
}
