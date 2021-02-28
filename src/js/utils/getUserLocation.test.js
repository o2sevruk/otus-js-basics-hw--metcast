import { getUserLocation } from './getUserLocation';

describe('Detect user location', () => {
  const coords = {
    lt: 40,
    ln: 40,
  };

  beforeEach(() => {
    jest
      .spyOn(global.navigator.geolocation, 'getCurrentPosition')
      .mockImplementation((res) => {
        res(coords);
      });
  });

  afterEach(() => {
    global.navigator.geolocation.getCurrentPosition.mockRestore();
  });

  it('Get current user location coordinates', () => {
    getUserLocation().then(async (data) => {
      expect(data).toBeInstanceOf(Object);
    });
  });
});
