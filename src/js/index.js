import { getUserLocation } from "./utils/getUserLocation";
import {
  getWeatherByCityName,
  getWeatherByCoordinates,
} from "./utils/getWeather";
import { setCookies, getCookies } from "./utils/cookies";

import Map from "./components/map";
import Loader from "./components/loader";
import Info from "./components/info";
import Form from "./components/form";
import History from "./components/history";
import Message from "./components/error";

const location = getUserLocation();
const map = new Map();

const loader = new Loader();

loader.addLoader();

location
  .then(async (data) => {
    return await getWeatherByCoordinates(data.lt, data.ln).then((data) => data);
  })
  .then((data) => {
    const info = new Info(data.name, data.main.temp, data.weather[0].icon);
    const form = new Form();
    const formEl = form.getForm;
    const history = new History();

    const mapHistoryWrapper = document.createElement("div");
    mapHistoryWrapper.id = "mapHistory";
    mapHistoryWrapper.classList.add("map-history-wrapper");

    loader.removeLoader();
    info.addInfo();
    form.addForm();

    document.body.appendChild(mapHistoryWrapper);

    if (getCookies().length) {
      history.addHistory(document.getElementById("mapHistory"));

      getCookies().forEach((el) => {
        history.addItemToHistory(el, async () => {
          await getWeatherByCityName(el).then((data) => {
            map.setCenter(data.coord.lat, data.coord.lon);
            info.setWeather(data.name, data.main.temp, data.weather[0].icon);
          });
        });
      });
    } else {
      history.addEmpty(document.getElementById("mapHistory"));
    }

    map.addMap(
      data.coord.lat,
      data.coord.lon,
      document.getElementById("mapHistory")
    );

    formEl.addEventListener("submit", async (e) => {
      e.preventDefault();

      const city = form.getValue;

      await getWeatherByCityName(city)
        .then((data) => {
          map.setCenter(data.coord.lat, data.coord.lon);
          info.setWeather(data.name, data.main.temp, data.weather[0].icon);
          history.removeEmpty();
          history.clearHistory();

          setCookies(data.name);

          if (document.getElementById("history") === null) {
            history.addHistory(document.getElementById("mapHistory"));
          }

          getCookies().forEach((el) => {
            history.addItemToHistory(el, async () => {
              await getWeatherByCityName(el).then((data) => {
                map.setCenter(data.coord.lat, data.coord.lon);
                info.setWeather(
                  data.name,
                  data.main.temp,
                  data.weather[0].icon
                );
              });
            });
          });

          form.setValue("");
        })
        .catch((error) => {
          const message = new Message();

          message.addError(city);
          form.setValue("");

          setTimeout(function () {
            message.removeError();
          }, 3000);

          throw new Error(error);
        });
    });
  });
