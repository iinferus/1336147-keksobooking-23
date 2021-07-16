import {setActiveState} from './formStatus.js';
import {createSimilarAd} from './offer.js';

const MAP_DEFAULT_SETTING = {
  lat: 35.68250,
  lng: 139.75211,
  view: 12,
  titleLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  copyright: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  mainMarkerUrl: '../img/main-pin.svg',
  mainMarkerSize: [52, 52],
  mainMarkerAnchor: [26, 52],
  MarkerUrl: '../img/pin.svg',
  MarkerSize: [40, 40],
  MarkerAnchor: [20, 40],
};

const adFormAddress = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    setActiveState();
  })
  .setView({
    lat: MAP_DEFAULT_SETTING.lat,
    lng: MAP_DEFAULT_SETTING.lng,
  }, MAP_DEFAULT_SETTING.view);

L.tileLayer(
  MAP_DEFAULT_SETTING.titleLayer,
  {
    attribution: MAP_DEFAULT_SETTING.copyright,
  },
).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: MAP_DEFAULT_SETTING.mainMarkerUrl,
  iconSize: MAP_DEFAULT_SETTING.mainMarkerSize,
  iconAnchor: MAP_DEFAULT_SETTING.mainMarkerAnchor,
});

const markerIcon = L.icon({
  iconUrl: MAP_DEFAULT_SETTING.MarkerUrl,
  iconSize: MAP_DEFAULT_SETTING.MarkerSize,
  iconAnchor: MAP_DEFAULT_SETTING.MarkerAnchor,
});
const mainMarker = L.marker(
  {
    lat: MAP_DEFAULT_SETTING.lat,
    lng: MAP_DEFAULT_SETTING.lng,
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

function resetMap() {
  mainMarker.setLatLng({
    lat: MAP_DEFAULT_SETTING.lat,
    lng: MAP_DEFAULT_SETTING.lng,
  });

  map.setView({
    lat: MAP_DEFAULT_SETTING.lat,
    lng: MAP_DEFAULT_SETTING.lng,
  }, MAP_DEFAULT_SETTING.view);
}

const markerGroup = L.layerGroup().addTo(map);

const createSimilarMarker = (data) => {
  data.forEach((offerData) => {
    const lat = offerData.location.lat;
    const lng = offerData.location.lng;

    const offer = createSimilarAd(offerData);

    const marker = L.marker({
      lat,
      lng,
    },{
      icon: markerIcon,
    });

    marker.addTo(markerGroup).bindPopup(offer);
  });
};

const cleanMap = () => {
  markerGroup.clearLayers ();
};

export {resetMap, createSimilarMarker, cleanMap};
