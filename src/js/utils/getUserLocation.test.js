import {getUserLocation} from './getUserLocation';

describe('Detect user location', () => {
	beforeEach(() => {
		jest.spyOn(global.navigator.geolocation, 'getCurrentPosition');
	});

	afterEach(() => {
		global.navigator.geolocation.getCurrentPosition.mockRestore();
	});

	it('Get current user location coordinates', async () => {
		getUserLocation().then(async data => {
			await expect(data).toBeInstanceOf(Object);
		});
	});
});