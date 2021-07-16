const filter = document.querySelector('.map__filters');

const checkType = (data) => {
  const filterTypeValue = document.querySelector('#housing-type').value;
  if (filterTypeValue === 'any') {
    return true;
  } else if (data.offer.type === filterTypeValue) {
    return true;
  }
  return false;
};

const getPriceRange = (value) => {
  const priceRanges = {
    'middle': {
      from: 10000,
      to: 50000,
    },
    'low': {
      from: 0,
      to: 10000,
    },
    'high': {
      from: 50000,
      to: 1000000,
    },
  };
  return priceRanges[value];
};

const checkPrice = (data) => {
  const filterTypePrice = document.querySelector('#housing-price').value;
  const dataOfferPrice = data.offer.price;
  const range = getPriceRange(filterTypePrice);
  if (filterTypePrice === 'any') {
    return true;
  } else if (dataOfferPrice >= range.from && dataOfferPrice <= range.to) {
    return true;
  }
  return false;
};

const checkRooms = (data) => {
  const filterTypeRooms = document.querySelector('#housing-rooms').value;
  if (filterTypeRooms === 'any' || filterTypeRooms === String(data.offer.rooms)) {
    return true;
  }
  return false;
};

const checkGuests = (data) => {
  const filterTypeGuests = document.querySelector('#housing-guests').value;
  if (filterTypeGuests === 'any' || filterTypeGuests === String(data.offer.guests)) {
    return true;
  }
  return false;
};

const checkFeatures = (data) => {
  const checkedFeaturesList = document.querySelectorAll('.map__checkbox:checked');

  const checkedFeaturesListValues = [];
  for (let index = 0; index < checkedFeaturesList.length; index++) {
    checkedFeaturesListValues[index] = checkedFeaturesList[index].value;
  }

  const dataOfferFeatures = data.offer.features;

  if (checkedFeaturesListValues.length === 0) {
    return true;
  } else {
    if (dataOfferFeatures !== undefined) {
      return checkedFeaturesListValues.every((element) => dataOfferFeatures.includes(element));
    }
    return false;
  }
};

const filterOffers = (offers) =>
  offers.filter((data) => checkType(data) && checkPrice(data) &&
    checkRooms(data) && checkGuests(data) && checkFeatures(data));

const filterReset = () => filter.reset();

export {filterOffers, filterReset};
