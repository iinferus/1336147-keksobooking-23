import {offersDataArrays} from './data.js';
import {createSimilarAds} from './offer.js';
import {setInactiveState, setActiveState} from './formStatus.js';
const offerList = document.querySelector('#map-canvas');

setInactiveState();
setActiveState();

offerList.appendChild(createSimilarAds(offersDataArrays));

