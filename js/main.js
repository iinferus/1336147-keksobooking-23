function generateGeoCoordinates(minNumber, maxNumber, afterDotNumber) {
  let generateNumber = Math.random() * (maxNumber - minNumber) + minNumber;
  generateNumber = generateNumber.toFixed(afterDotNumber);
  return generateNumber;
}

generateGeoCoordinates(0, 5, 2);
