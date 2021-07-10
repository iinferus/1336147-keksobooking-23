import './formValidation.js';
import {resetMap} from './map.js';

const adFormReset = document.querySelector('.ad-form__reset');

adFormReset.addEventListener('click', () => resetMap());
