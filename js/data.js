const MIN_PRICE = 1;
const MAX_PRICE = 1000000;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const MIN_ROOMS = 1;
const MAX_ROOMS = 100;
const MIN_GUESTS = 0;
const MAX_GUESTS = 3;
const CHECK_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const locationLat = {
  min: 35.65,
  max: 35.7,
};
const locationLng = {
  min: 139.7,
  max: 139.8,
};

const OFFER_COUNT = 10;

function generateRandomNumber(minNumber, maxNumber, afterDotNumber = 0) {
  const lower = Math.min(Math.abs(minNumber), Math.abs(maxNumber));
  const upper = Math.max(Math.abs(minNumber), Math.abs(maxNumber));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(afterDotNumber);
}

function getRandomArrayElement(elements) {
  return elements[generateRandomNumber(0, elements.length - 1)];
}

function getRandomMultipleArrayElement(elements) {
  const randomArrayNumber = generateRandomNumber(1, elements.length - 1);
  for (let i = elements.length - 1; i > 0; i--) {
    const randomSort = Math.floor(Math.random() * (i + 1));
    [elements[i], elements[randomSort]] = [elements[randomSort], elements[i]];
  }
  const array = elements.slice(0, randomArrayNumber);
  return array;
}

let imgAdressPostfix = 0;

const createAuthor = () => {
  imgAdressPostfix++;
  return {
    avatar: `img/avatars/user${
      imgAdressPostfix < 10 ? '0' : ''
    }${imgAdressPostfix}.png`,
  };
};

function getLocation() {
  return {
    lat: generateRandomNumber(locationLat.min, locationLat.max, 5),
    lng: generateRandomNumber(locationLng.min, locationLng.max, 5),
  };
}

function createOffer() {
  return {
    title: 'Потрясающее бунгало с выходом в море',
    address: Object.values(getLocation()).join(', '),
    price: generateRandomNumber(MIN_PRICE, MAX_PRICE),
    type: getRandomArrayElement(TYPES),
    rooms: generateRandomNumber(MIN_ROOMS, MAX_ROOMS),
    guests: generateRandomNumber(MIN_GUESTS, MAX_GUESTS),
    checkin: getRandomArrayElement(CHECK_TIMES),
    checkout: getRandomArrayElement(CHECK_TIMES),
    features: getRandomMultipleArrayElement(FEATURES),
    description: 'Собственный пляж на первой линии, потрясающий вид на море и закаты, вокруг лес и горы. Завтрак, обед и ужин шведский стол, все включено.',
    photos: getRandomMultipleArrayElement(PHOTOS),
  };
}

const uniteData = function(authorArray, offerArray, locationArray) {
  return {author: authorArray, offer: offerArray,location: locationArray};
};

const offersDataArrays = new Array(OFFER_COUNT).fill(null).map(() => uniteData(createAuthor(), createOffer(), getLocation()));
export{offersDataArrays};
