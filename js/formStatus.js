const adForm = document.querySelector('.ad-form');
const adFormElement = adForm.children;
const filterMap = document.querySelector('.map__filters');
const filterMapElement = filterMap.children;

function setInactiveState() {
  adForm.classList.add('ad-form--disabled');
  for (const fieldset of adFormElement) {
    fieldset.setAttribute('disabled', true);
  }

  filterMap.classList.add('map__filters--disabled');
  for (const element of filterMapElement) {
    element.setAttribute('disabled', true);
  }
}

function setActiveState() {
  adForm.classList.remove('ad-form--disabled');
  for (const fieldset of adFormElement) {
    fieldset.removeAttribute('disabled');
  }

  filterMap.classList.remove('map__filters--disabled');
  for (const element of filterMapElement) {
    element.removeAttribute('disabled');
  }
}

export {setInactiveState, setActiveState};
