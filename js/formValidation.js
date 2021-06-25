const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const CAPACITY_GUESTS = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const adForm = document.querySelector('.ad-form');
const adFormTitle = adForm.querySelector('#title');
const adFormPrice = adForm.querySelector('#price');
const adFormRoom = adForm.querySelector('#room_number');
const adFormGuest = adForm.querySelector('#capacity');

adFormTitle.addEventListener('input', () => {
  const valueLength = adFormTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    adFormTitle.setCustomValidity(`Минимальное количество символов - ${MIN_TITLE_LENGTH}. Осталось ввести ${MIN_TITLE_LENGTH - valueLength} символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adFormTitle.setCustomValidity(`Максимальное количество символов - ${MAX_TITLE_LENGTH}. Удалите лишниее ${MIN_TITLE_LENGTH - valueLength} символов`);
  } else {
    adFormTitle.setCustomValidity('');
  }

  adFormTitle.reportValidity();
});

adFormPrice.addEventListener('input', () => {
  const valueLength = adFormPrice.value;
  if (adFormPrice.validity.valueMissing) {
    adFormPrice.setCustomValidity('Обязательное поле');
  } else if (valueLength > MAX_PRICE) {
    adFormPrice.setCustomValidity(`Максимальная цена - ${MAX_PRICE}`);
  } else {
    adFormPrice.setCustomValidity('');
  }

  adFormPrice.reportValidity();
});

const valueKeys = Object.keys(CAPACITY_GUESTS);

adFormGuest.addEventListener('change', () => {
  const valueRoom = adFormRoom.value;
  const valueGuest = +adFormGuest.value;

  valueKeys.forEach((key) => {
    if(valueRoom === key) {
      const capacityArray = CAPACITY_GUESTS[key];
      const capacityArayIndex = capacityArray.indexOf(valueGuest);
      if (capacityArayIndex === -1) {
        adFormGuest.setCustomValidity('Не верное значение');
      } else {
        adFormGuest.setCustomValidity('');
      }
    }
  });

  adFormGuest.reportValidity();
});
