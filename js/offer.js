const OFFER_TYPE_LIB = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

let offerElement;

function replaceTemplate(selector, string) {
  if (typeof element !== undefined) {
    const elem = offerElement.querySelector(`.${selector}`);
    return elem.textContent = string;
  }
  offerElement.querySelector(`.${selector}`).classList.add('visually-hidden');
}

function createSimilarAd(data) {
  offerElement = cardTemplate.cloneNode(true);
  function getStringRoom(offer) {
    if (offer.rooms > 1 && offer.rooms < 5) {
      return `${offer.rooms} комнаты`;
    }
    if (offer.rooms >= 5) {
      return `${offer.rooms} комнат`;
    }
    return `${offer.rooms} комната`;
  }

  function getStringGuests(offer) {
    if (offer.guests === '0') {
      return ' не для гостей';
    }
    if (offer.guests > 1) {
      return ` для ${offer.guests} гостей`;
    }
    return ` для ${offer.guests} гостя`;
  }

  function generateOffer(offer) {
    replaceTemplate('popup__title', offer.title);
    replaceTemplate('popup__text--address', offer.address);
    replaceTemplate('popup__type', OFFER_TYPE_LIB[offer.type]);
    replaceTemplate('popup__text--price', `${offer.price} ₽/ночь`);
    replaceTemplate('popup__text--capacity', getStringRoom(offer) + getStringGuests(offer));
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
    featuresList.textContent = '';
    const featuresListFragment = document.createDocumentFragment();
    offer.features.forEach((feature) => {
      const featureTemplate = document.createElement('li');
      featureTemplate.classList.add('popup__feature',`popup__feature--${feature}`);
      featuresListFragment.appendChild(featureTemplate);
    });
    featuresList.appendChild(featuresListFragment);
  }

  generateOffer(data.offer);
  const authorPhoto = offerElement.querySelector('.popup__avatar');
  authorPhoto.src = data.author.avatar;
  return offerElement;
}

export {createSimilarAd};
