import { enableFetchMocks } from 'jest-fetch-mock';

import { OPENWEATHERMAP_API_KEY } from '../constants';

import { getWeatherByCityName, getWeatherByCoordinates } from './getWeather';

enableFetchMocks();

describe('Get weather data', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Get weather data by city name', async () => {
    const city = 'Moscow';

    fetch.mockResponseOnce(
      JSON.stringify({
        name: city,
      }),
    );

    const weatherByCity = await getWeatherByCityName(city);

    expect(weatherByCity.name).toEqual(city);
    expect(fetch.mock.calls).toHaveLength(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHERMAP_API_KEY}`,
    );
  });

  it('Get weather data by coordinates', async () => {
    const lt = 55.7522;
    const ln = 37.6156;
    const city = 'Moscow';

    fetch.mockResponseOnce(
      JSON.stringify({
        name: city,
      }),
    );

    const weatherByCity = await getWeatherByCoordinates(lt, ln);

    expect(weatherByCity.name).toEqual(city);
    expect(fetch.mock.calls).toHaveLength(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lt}&lon=${ln}&units=metric&appid=${OPENWEATHERMAP_API_KEY}`,
    );
  });

  it('Error invalid city name', async () => {
    const city = 'Notacity';

    fetch.mockResponseOnce(
      {},
      {
        status: 404,
        headers: {
          'content-type': 'application/json',
        },
      },
    );

    await expect(async () => {
      await getWeatherByCityName(city);
    }).rejects.toThrowError();
  });

  it('Error invalid coordinates', async () => {
    const lt = 'test';
    const ln = 'test';

    fetch.mockResponseOnce('{}', {
      status: 404,
      headers: {
        'content-type': 'application/json',
      },
    });

    await expect(async () => {
      await getWeatherByCoordinates(lt, ln);
    }).rejects.toThrowError();
  });
});
