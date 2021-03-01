import { getUserLocation } from './utils/getUserLocation';
import {
  getWeatherByCityName,
  getWeatherByCoordinates,
} from './utils/getWeather';
import { setLocalStorage, getLocalStorage } from './utils/localStorage';

import Map from './components/map';
import Loader from './components/loader';
import Info from './components/info';
import Form from './components/form';
import History from './components/history';
import Message from './components/error';

const location = getUserLocation();
const map = new Map();

const loader = new Loader();

loader.addLoader();

location
  .then((locationData) => getWeatherByCoordinates(locationData.lt, locationData.ln).then(
    (weatherData) => weatherData,
  ))
  .then((weatherData) => {
    const info = new Info(
      weatherData.name,
      weatherData.main.temp,
      weatherData.weather[0].icon,
    );
    const form = new Form();
    const formEl = form.getForm;
    const history = new History();

    const mapHistoryWrapper = document.createElement('div');
    mapHistoryWrapper.id = 'mapHistory';
    mapHistoryWrapper.classList.add('map-history-wrapper');

    loader.removeLoader();
    info.addInfo();
    form.addForm();

    document.body.appendChild(mapHistoryWrapper);

    if (getLocalStorage().length) {
      history.addHistory(document.getElementById('mapHistory'));

      getLocalStorage().forEach((el) => {
        history.addItemToHistory(el, async () => {
          await getWeatherByCityName(el).then((localStorageData) => {
            map.setCenter(
              localStorageData.coord.lat,
              localStorageData.coord.lon,
            );
            info.setWeather(
              localStorageData.name,
              localStorageData.main.temp,
              localStorageData.weather[0].icon,
            );
          });
        });
      });
    } else {
      history.addEmpty(document.getElementById('mapHistory'));
    }

    map.addMap(
      weatherData.coord.lat,
      weatherData.coord.lon,
      document.getElementById('mapHistory'),
    );

    formEl.addEventListener('submit', async (e) => {
      e.preventDefault();

      const city = form.getValue;

      await getWeatherByCityName(city)
        .then((submitWeatherData) => {
          map.setCenter(
            submitWeatherData.coord.lat,
            submitWeatherData.coord.lon,
          );
          info.setWeather(
            submitWeatherData.name,
            submitWeatherData.main.temp,
            submitWeatherData.weather[0].icon,
          );
          history.removeEmpty();
          history.clearHistory();

          setLocalStorage(submitWeatherData.name);

          if (document.getElementById('history') === null) {
            history.addHistory(document.getElementById('mapHistory'));
          }

          getLocalStorage().forEach((el) => {
            history.addItemToHistory(el, async () => {
              await getWeatherByCityName(el).then(
                (submitLocalStorageWeatherData) => {
                  map.setCenter(
                    submitLocalStorageWeatherData.coord.lat,
                    submitLocalStorageWeatherData.coord.lon,
                  );
                  info.setWeather(
                    submitLocalStorageWeatherData.name,
                    submitLocalStorageWeatherData.main.temp,
                    submitLocalStorageWeatherData.weather[0].icon,
                  );
                },
              );
            });
          });

          form.setValue('');
        })
        .catch((error) => {
          const message = new Message();

          message.addError(city);
          form.setValue('');

          setTimeout(() => {
            message.removeError();
          }, 3000);

          throw new Error(error);
        });
    });
  });
