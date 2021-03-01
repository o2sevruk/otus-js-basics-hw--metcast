import 'leaflet';

import { MAPBOX_API_KEY } from '../constants';

export default class Map {
  constructor() {
    this.el = document.createElement('div');
    this.id = 'map';
    this.className = 'map';
    this.map = null;
  }

  addMap(lt, ln, mountTarget = document.body) {
    const map = this.el;
    map.id = this.id;
    map.classList.add(this.className);

    mountTarget.appendChild(this.el);

    this.map = L.map(this.id, {
      center: [lt, ln],
      zoom: 10,
      zoomControl: false,
      dragging: false,
    });

    L.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_API_KEY}`,
      {
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: MAPBOX_API_KEY,
      },
    ).addTo(this.map);
  }

  setCenter(lt, ln) {
    this.map.panTo(new L.LatLng(lt, ln));
  }
}
