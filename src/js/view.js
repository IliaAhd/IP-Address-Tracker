import 'leaflet';
import 'leaflet/dist/leaflet.js';
import 'leaflet/dist/leaflet.css';

import markerIcon from '../images/icon-marker2.png';

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
  _message = 'Please enter correct IP address!';

  _genereateMarkup(data) {
    return `
      <div class="lg:px-12">
        <h3
          class="text-dark-gray text-[12px] uppercase font-medium tracking-wider"
        >
          Ip address
        </h3>
        <p class="text-lg font-medium">${data.ip}</p>
      </div>

      <div class="lg:px-12">
        <h3
          class="text-dark-gray text-[12px] uppercase font-medium tracking-wider"
        >
          Location
        </h3>
        <p class="text-lg font-medium">${data.country}, ${data.city}</p>
      </div>

      <div class="lg:px-12">
        <h3
          class="text-dark-gray text-[12px] uppercase font-medium tracking-wider"
        >
          Timezone
        </h3>
        <p class="text-lg font-medium">${data.timezone.id} ${data.timezone.utc}</p>
      </div>

      <div class="lg:px-12">
        <h3
          class="text-dark-gray text-[12px] uppercase font-medium tracking-wider"
        >
          ISP
        </h3>
        <p class="text-lg font-medium">${data.connection.isp}</p>
      </div>
    `;
  }
}

export class ShowMap extends View {
  _parentEl = document.querySelector('#map');
  _map = L.map('map');
  _myIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [65, 65],
  });

  renderMap(position) {
    this._map.setView(position, 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this._map);

    L.marker(position, { icon: this._myIcon }).addTo(this._map).openPopup();
  }
}
