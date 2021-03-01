import { getWeatherByCityName, getWeatherByCoordinates } from './getWeather';

describe('Get weather data', () => {
  const latitude = 40;
  const longitude = 40;
  const errorNumber = '404';
  const city = 'Moscow';
  const data = {
    name: 'Moscow',
    main: {
      temp: 2,
    },
    weather: [
      {
        icon: '04n',
      },
    ],
  };

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(data),
  }));

  beforeEach(() => {
    fetch.mockClear();
  });

  it('Get weather data by city name', async () => {
    const weather = await getWeatherByCityName(city);

    expect(weather).toEqual(data);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Throws error when city name are incorrect', () => {
    fetch.mockImplementationOnce(() => Promise.reject(errorNumber));

    expect(async () => {
      await getWeatherByCityName(city);
    }).rejects.toThrow(`Ошибка HTTP: ${errorNumber}`);
  });

  it('Get weather data by coordinates', async () => {
    const weather = await getWeatherByCoordinates(latitude, longitude);

    expect(weather).toEqual(data);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Throws error when coordinates are incorrect', () => {
    fetch.mockImplementationOnce(() => Promise.reject(errorNumber));

    expect(async () => {
      await getWeatherByCoordinates(latitude, longitude);
    }).rejects.toThrow(`Ошибка HTTP: ${errorNumber}`);
  });
});
