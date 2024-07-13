import 'leaflet';
import 'leaflet/dist/leaflet.js';
import 'leaflet/dist/leaflet.css';

import markerIcon from '../images/icon-marker.png';

import {
  MARKER_POS,
  MAP_ZOOM,
  MAP_TILE,
  COPYRIGHT,
  MARKER_SIZE,
} from './utils/config';

class View {
  render(data) {
    this._data = data;

    const markup = this._genereateMarkup(this._data);

    this._clear();

    this._parentEl.insertAdjacentHTML('beforeend', markup);
  }

  renderLoadingSpinner() {
    this._clear();

    const markup = `
      <div
        class="h-12 w-12 animate-spin rounded-full border-[5px] border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite] text-blue-500"
        role="status"
      >
      </div>
    `;
    this._parentEl.insertAdjacentHTML('beforeend', markup);
  }

  renderError(message = this._message) {
    this._clear();
    this._parentEl.innerHTML = message;
  }

  _clear() {
    this._parentEl.innerHTML = '';
  }
}

export class SearchIPView extends View {
  _parentEl = document.querySelector('#form');

  addHandlerShowIPData(handler) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();

      const btn = e.target.querySelector('.btn');
      if (!btn) return;

      const query = this._parentEl.querySelector('input').value.trim();

      handler(query);

      this._clearInput();
    });
  }

  _clearInput() {
    this._parentEl.querySelector('input').value = '';
  }
}

export class ShowIPDataView extends View {
  _parentEl = document.querySelector('#ipInfo');
  _message = 'Please enter a valid IPv4 address!';

  _genereateMarkup(data) {
    return `
      <div>
        <h3
          class="text-dark-gray text-[12px] uppercase font-medium tracking-wider"
        >
          Ip address
        </h3>
        <p class="text-lg font-medium">${data.ip}</p>
      </div>

      <div>
        <h3
          class="text-dark-gray text-[12px] uppercase font-medium tracking-wider"
        >
          Location
        </h3>
        <p class="text-lg font-medium">${data.country_name}, ${data.city}</p>
      </div>

      <div>
        <h3
          class="text-dark-gray text-[12px] uppercase font-medium tracking-wider"
        >
          Timezone
        </h3>
        <p class="text-lg font-medium">${data.time_zone.name}</p>
      </div>

      <div>
        <h3
          class="text-dark-gray text-[12px] uppercase font-medium tracking-wider"
        >
          ISP
        </h3>
        <p class="text-lg font-medium">${data.isp}</p>
      </div>
    `;
  }
}

export class ShowMap extends View {
  _parentEl = document.querySelector('#map');
  _map = L.map('map');
  _myIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: MARKER_SIZE,
  });
  _marker = L.marker(MARKER_POS, { icon: this._myIcon });
  _tileLayer = L.tileLayer(MAP_TILE, {
    attribution: COPYRIGHT,
  }).addTo(this._map);

  renderMap(position) {
    this._map.setView(position, MAP_ZOOM);
    this._renderMarker(position);
  }

  _renderMarker(position) {
    this._marker.setLatLng(position).addTo(this._map);
  }

  _removeMarker() {
    this._marker.remove();
  }
}
