export default class Info {
	constructor(city, weather, icon) {
		this.el = document.createElement('div');
		this.id = 'info';
		this.className = 'info';
		this.city = city;
		this.weather = weather;
		this.icon = icon;
	}

	addInfo(mountTarget = document.body) {
		const info = this.el;
		info.id = this.id;
		info.innerHTML = `
			<img class="info__img" src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="Weather Icon" />
			<h4 class="info__title">${this.city}</h4>
			<strong class="info__description">${Math.round(this.weather)}°</strong>
		`;
		info.classList.add(this.className);

		mountTarget.appendChild(info);
	}

	setWeather(city, weather, icon) {
		this.el.innerHTML = `
			<img class="info__img" src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon" />
			<h4 class="info__title">${city}</h4>
			<strong class="info__description">${Math.round(weather)}°</strong>
		`;
	}
}