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

  if (valueRoom === 100 && valueGuest > 0) {
    adFormGuest.setCustomValidity('Для 100 комнат возможное значение 0 гостей');
  } else if (valueRoom < valueGuest) {
    adFormGuest.setCustomValidity('Гостей не может быть больше, чем комнат');
  } else {
    adFormGuest.setCustomValidity('');
  }

  adFormGuest.reportValidity();
}

adFormGuest.addEventListener('change', () => validateGuests());
adFormRoom.addEventListener('change', () => validateGuests());
