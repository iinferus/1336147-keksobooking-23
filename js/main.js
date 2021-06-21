import {offerDataArray} from './data.js';
import {generateSimilarAds} from './offer.js';
const offerList = document.querySelector('#map-canvas');

const generated = generateSimilarAds(offerDataArray);
offerList.appendChild(generated);
