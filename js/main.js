function generateRandomNumber(minNumber, maxNumber, afterDotNumber = 0) {
  const lower = Math.min(Math.abs(minNumber), Math.abs(maxNumber));
  const upper = Math.max(Math.abs(minNumber), Math.abs(maxNumber));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(afterDotNumber);
}

generateRandomNumber(0, 5, 2);

function getRandomArrayElement(elements) {
  return elements[generateRandomNumber(0, elements.length - 1)];
}

let imgAdressPostfix = 0;

const createAuthor = () => {
  imgAdressPostfix++;
  if (imgAdressPostfix > 8) {
    imgAdressPostfix = 1;
  }
  const postfix =
    String(imgAdressPostfix).length === 1
      ? `0${imgAdressPostfix}`
      : imgAdressPostfix;
  return {
    avatar: `img/avatars/user${postfix}.png`,
  };
};

createAuthor();

const MIN_PRICE = 1;
const MAX_PRICE = 1000000;
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const MIN_ROOMS = 1;
const MAX_ROOMS = 100;
const MIN_GUESTS = 0;
const MAX_GUESTS = 3;
const CHEK_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;
const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;

function createLocation() {
  return {
    lat: generateRandomNumber(MIN_LAT, MAX_LAT, 5),
    lng: generateRandomNumber(MIN_LNG, MAX_LNG, 5),
  };
}

const locationLat = createLocation().lat;
const locationLng = createLocation().lng;

function createOffer() {
  return {
    title: 'Потрясающее бунгало с выходом в море',
    address: `${locationLat} ${locationLng}`,
    price: generateRandomNumber(MIN_PRICE, MAX_PRICE),
    type: getRandomArrayElement(TYPE),
    rooms: generateRandomNumber(MIN_ROOMS, MAX_ROOMS),
    guests: generateRandomNumber(MIN_GUESTS, MAX_GUESTS),
    checkin: getRandomArrayElement(CHEK_TIMES),
    checkout: getRandomArrayElement(CHEK_TIMES),
    features: getRandomArrayElement(FEATURES),
    description: 'Собственный пляж на первой линии, потрясающий вид на море и закаты, вокруг лес и горы. Завтрак, обед и ужин шведский стол, все включено.',
    photos: getRandomArrayElement(photos),
  };
}

createOffer();
