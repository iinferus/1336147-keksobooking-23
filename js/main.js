function generateGeoCoordinates(minNumber, maxNumber, afterDotNumber = 0) {
  let generatedNumber;
  minNumber = Number(minNumber);
  maxNumber = Number(maxNumber);
  afterDotNumber = Number(afterDotNumber);
  if (minNumber < 0) {
    minNumber = Math.abs(minNumber);
  }
  if (maxNumber < 0) {
    maxNumber = Math.abs(maxNumber);
  }
  if (minNumber === maxNumber) {
    return maxNumber.toFixed(afterDotNumber);
  }
  if (minNumber > maxNumber) {
    generatedNumber = Math.random() * (minNumber - maxNumber) + maxNumber;
  }
  generatedNumber = Math.random() * (maxNumber - minNumber) + minNumber;
  return generatedNumber.toFixed(afterDotNumber);
}

generateGeoCoordinates(0, 5, 2);
