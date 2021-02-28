import Info from './info';

describe('Info component', () => {
	const info = new Info('Moscow', '-10', '13d');

	it('Add info to the page', () => {
		info.addInfo();

		expect(document.querySelector('.info__img').getAttribute('src')).toBeDefined();
		expect(document.querySelector('.info__title').textContent).toBe('Moscow');
		expect(document.querySelector('.info__description').textContent).toBe('-10°');
	});

	it('Updates info', () => {
		info.setWeather('Berlin', '1', '10d');

		expect(document.querySelector('.info__img').getAttribute('src')).toBeDefined();
		expect(document.querySelector('.info__title').textContent).toBe('Berlin');
		expect(document.querySelector('.info__description').textContent).toBe('1°');
	});
});