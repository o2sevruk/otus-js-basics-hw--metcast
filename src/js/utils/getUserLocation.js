export async function getUserLocation() {
	if (!navigator.geolocation) {
		alert('Пожалуйста, разрешите определение геопозиции в настройках браузера!');
	} else {
		return new Promise((res, rej) => {
			navigator.geolocation.getCurrentPosition(res, rej);
		}).then(data => {
			return {
				lt: data.coords.latitude,
				ln: data.coords.longitude
			}
		}).catch(() => {
			throw new Error('Извините, нет доступной геопозиции.');
		});
	}
}