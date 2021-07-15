import {setOfferFormSubmit, resetForm} from './formValidation.js';
import {resetMap, createSimilarMarker} from './map.js';
import {getData} from './fetch.js';
import {mapError} from './message.js';
import {filterReset} from './filter.js';

const adFormReset = document.querySelector('.ad-form__reset');

adFormReset.addEventListener('click', () => {
  resetMap();
  filterReset();
  resetForm();
});

getData((data) => {
  createSimilarMarker(data.slice(0, 10));
}, mapError);

setOfferFormSubmit(() => {resetMap();filterReset();resetForm();});
