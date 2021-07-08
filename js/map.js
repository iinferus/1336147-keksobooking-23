import {setActiveState} from './formStatus.js';
import {offersDataArrays} from './data.js';
import {createSimilarAd} from './offer.js';

const adFormAddress = document.querySelector('#address');
const adFormReset = document.querySelector('.ad-form__reset');

const map = L.map('map-canvas')
  .on('load', () => {
    setActiveState();
  })
  .setView({
    lat: 35.6825000,
    lng: 139.7521100,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const markerIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
const mainMarker = L.marker(
  {
    lat: 35.682500,
    lng: 139.752100,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const markerValue = evt.target.getLatLng();
  adFormAddress.value = `${markerValue.lat.toFixed(5)} ${markerValue.lng.toFixed(5)}`;
});

adFormReset.addEventListener('click', () => {
  mainMarker.setLatLng({
    lat: 35.682500,
    lng: 139.752100,
  });

  map.setView({
    lat: 35.6825000,
    lng: 139.7521100,
  }, 12);
});

const markerGroup = L.layerGroup().addTo(map);

offersDataArrays.forEach((offerData) => {
  const lat = offerData[2].lat;
  const lng = offerData[2].lng;

  const offer = createSimilarAd(offerData);

  const marker = L.marker({
    lat,
    lng,
  },{
    icon: markerIcon,
  });

  marker.addTo(markerGroup).bindPopup(offer);
});

