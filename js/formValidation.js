import {SEND_DATA} from './fetch.js';
import {formSuccess, formFail} from './message.js';

const TYPES_MIN_PRICES = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const adForm = document.querySelector('.ad-form');
const adFormPrice = adForm.querySelector('#price');
const adFormRoom = adForm.querySelector('#room_number');
const adFormGuest = adForm.querySelector('#capacity');
const adFormType = adForm.querySelector('#type');
const adFormTimeIn = adForm.querySelector('#timein');
const adFormTimeInOpt = adFormTimeIn.querySelectorAll('option');
const adFormTimeOut = adForm.querySelector('#timeout');
const adFormTimeOutOpt = adFormTimeOut.querySelectorAll('option');

const typeKeys = Object.keys(TYPES_MIN_PRICES);

adFormType.addEventListener('change', () => {
  const valueType = adFormType.value;

  typeKeys.forEach((typeKey) =>{
    if (typeKey === valueType) {
      const typeMinPrice = TYPES_MIN_PRICES[typeKey];
      adFormPrice.placeholder = typeMinPrice;
      adFormPrice.setAttribute('min', typeMinPrice);
    }
  });
});

function validateGuests() {
  const valueRoom = +adFormRoom.value;
  const valueGuest = +adFormGuest.value;

  if (valueRoom < valueGuest) {
    adFormGuest.setCustomValidity('Гостей не может быть больше, чем комнат');
  } else if (valueRoom !== 100 && valueGuest === 0) {
    adFormGuest.setCustomValidity('Минимум один гость');
  } else if (valueRoom === 100 && valueGuest > 0) {
    adFormGuest.setCustomValidity('Для 100 комнат возможное значение 0 гостей');
  } else {
    adFormGuest.setCustomValidity('');
  }

  adFormGuest.reportValidity();
}

adFormGuest.addEventListener('change', () => validateGuests());
adFormRoom.addEventListener('change', () => validateGuests());

function changeTime(firstArray, secondArray) {
  let valueTime;

  firstArray.forEach((optionFirst) => {
    if (optionFirst.selected) {
      valueTime = optionFirst;
    }
  });
  secondArray.forEach((optionSecond) => {
    if (optionSecond.value === valueTime.value) {
      optionSecond.selected = 'true';
    }
  });
}

adFormTimeIn.addEventListener('change', () => changeTime(adFormTimeInOpt, adFormTimeOutOpt));
adFormTimeOut.addEventListener('change', () => changeTime(adFormTimeOutOpt, adFormTimeInOpt));

const resetForm = () => {
  adForm.reset();
};

const setOfferFormSubmit = (resetPage) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    SEND_DATA(
      () => {formSuccess(); resetPage();},
      () => formFail(),
      new FormData(evt.target),
    );
  });
};

export {setOfferFormSubmit, resetForm};
