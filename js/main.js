import {setOfferFormSubmit, resetForm} from './formValidation.js';
import {resetMap, createSimilarMarker, cleanMap} from './map.js';
import {getData} from './fetch.js';
import {mapError} from './message.js';
import {filterOffers, filterReset, filterBlock} from './filter.js';
import {debounce} from './debounce.js';
import {resetPhoto} from './photoPreview.js';

const adFormReset = document.querySelector('.ad-form__reset');
const mapFilter = document.querySelector('.map__filters');
const OFFERS_MAGIC_COUNT = 10;
const OFFERS_DELAY = 500;

adFormReset.addEventListener('click', () => {
  resetMap();
  filterReset();
  resetForm();
  resetPhoto();
});

getData((data) => {
  createSimilarMarker(data.slice(0, OFFERS_MAGIC_COUNT));
  mapFilter.addEventListener('change', debounce(() => {
    cleanMap();
    createSimilarMarker((filterOffers(data)).slice(0, OFFERS_MAGIC_COUNT));
  }, OFFERS_DELAY));
}, () => {mapError();filterBlock();});

setOfferFormSubmit(() => {resetMap();filterReset();resetForm();resetPhoto();});
