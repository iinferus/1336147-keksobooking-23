import {createAuthor, getLocation, createOffer} from './data.js';

const DATA_ARRAY_COUNT = 10;

// eslint-disable-next-line no-unused-vars
const dataArray = new Array(DATA_ARRAY_COUNT).fill(null).map(() => {
  createAuthor();
  getLocation();
  createOffer();
});
