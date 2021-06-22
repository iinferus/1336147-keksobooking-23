import {offersDataArrays} from './data.js';
import {createSimilarAds} from './offer.js';
const offerList = document.querySelector('#map-canvas');

offerList.appendChild(createSimilarAds(offersDataArrays));
