import {OPENWEATHERMAP_API_KEY} from '../constants';

export async function getWeatherByCityName(city) {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHERMAP_API_KEY}`);

	if (response.ok) {
		return await response.json();
	} else {
		throw new Error(`Ошибка HTTP: ${response.status}`);
	}
}

export async function getWeatherByCoordinates(lt, ln) {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lt}&lon=${ln}&units=metric&appid=${OPENWEATHERMAP_API_KEY}`);

	if (response.ok) {
		return await response.json();
	} else {
		throw new Error(`Ошибка HTTP: ${response.status}`);
	}
}