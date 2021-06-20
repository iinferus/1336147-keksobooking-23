import {authorDataArray, offerDataArray, offerTypeLib} from './data.js';

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const offerList = document.querySelector('#map-canvas');


offerDataArray.forEach((offer, i) => {
  const offerElement = cardTemplate.cloneNode(true);
  function replaceTemplate (selector, element) {
    if (typeof element !== undefined) {
      return offerElement.querySelector(`.${selector}`).textContent = element;
    }
    offerElement.querySelector(`.${selector}`).classList.add('visually-hidden');
  }

  replaceTemplate('popup__title', offer.title);
  replaceTemplate('popup__text--address', offer.address);
  replaceTemplate('popup__type', offerTypeLib[offer.type]);
  replaceTemplate('popup__text--price', `${offer.price} ₽/ночь`);
  replaceTemplate('popup__text--capacity', `${offer.rooms} комнаты для ${offer.guests} гостей`);
  replaceTemplate('popup__text--time', `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  replaceTemplate('popup__description', offer.description);

  const photosPopup = offerElement.querySelector('.popup__photos');
  function makePhoto() {
    photosPopup.textContent = '';
    offer.photos.forEach((photo) => {
      const photoElement = document.createElement('img');
      photoElement.classList.add('popup__photo');
      photoElement.src = photo;
      photoElement.setAttribute('width','45');
      photoElement.setAttribute('height','40');
      photoElement.alt = 'Фотография жилья';
      photosPopup.appendChild(photoElement);
    });
  }

  if(offer.photos === '') {
    photosPopup.classList.add('visually-hidden');
  } else {
    makePhoto();
  }

  const featuresList = offerElement.querySelector('.popup__features');

  const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);
  featuresList.querySelectorAll('.popup__feature')
    .forEach((item) => {
      const modifier = item.classList[1];

      if(!modifiers.includes(modifier)) {
        item.remove();
      }
    });

  const authorPhoto = offerElement.querySelector('.popup__avatar');
  authorPhoto.src = authorDataArray[i].avatar;
  offerList.appendChild(offerElement);
});

