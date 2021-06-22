const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const adFormSubmitButton = adForm.querySelector('.ad-form__submit');
const adFormUploadFieldset = adForm.querySelector('.ad-form-header');

const filterMap = document.querySelector('.map__filters');
const filterMapElements = filterMap.querySelectorAll('.map__filter');
const filterMapFeaturesFieldset = filterMap.querySelector('.map__features');

function setInactiveState() {
  adForm.classList.add('ad-form--disabled');
  for (const element of adFormElements) {
    element.setAttribute('disabled', true);
  }
  adFormSubmitButton.setAttribute('disabled', true);
  adFormUploadFieldset.setAttribute('disabled', true);

  filterMap.classList.add('map__filters--disabled');
  for (const element of filterMapElements) {
    element.setAttribute('disabled', true);
  }
  filterMapFeaturesFieldset.setAttribute('disabled', true);
}

function setActiveState() {
  adForm.classList.remove('ad-form--disabled');
  for (const element of adFormElements) {
    element.removeAttribute('disabled');
  }
  adFormSubmitButton.removeAttribute('disabled');
  adFormUploadFieldset.removeAttribute('disabled');

  filterMap.classList.remove('map__filters--disabled');
  for (const element of filterMapElements) {
    element.removeAttribute('disabled');
  }
  filterMapFeaturesFieldset.removeAttribute('disabled');
}

export {setInactiveState, setActiveState};
