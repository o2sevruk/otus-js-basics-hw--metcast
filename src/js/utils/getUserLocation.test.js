import { getUserLocation } from './getUserLocation';

describe('Detect user location', () => {
  const location = {
    coords: {
      latitude: 40,
      longitude: 40,
    },
  };
  const errorNumber = '404';

  global.navigator.geolocation = {
    getCurrentPosition: jest.fn((res, rej) => res(location)),
  };

  beforeEach(() => {
    jest.spyOn(global.navigator.geolocation, 'getCurrentPosition');
  });

  afterEach(() => {
    global.navigator.geolocation.getCurrentPosition.mockRestore();
  });

  it('Get current user location coordinates', () => {
    getUserLocation().then((data) => {
      expect(data).toBeInstanceOf(Object);
    });
  });

  it('Throws error when user location undefined', () => {
    global.navigator.geolocation.getCurrentPosition.mockImplementationOnce(
      (res, rej) => rej(),
    );

    getUserLocation().catch((err) => expect(err.toString()).toMatch('Извините, нет доступной геопозиции.'));
  });
});
