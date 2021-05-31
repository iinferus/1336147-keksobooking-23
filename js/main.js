function generateGeoCoordinates(minNumber, maxNumber, afterDotNumber = 0) {
  if (minNumber < 0) {
    minNumber = Math.abs(minNumber);
  }
  if (maxNumber < 0) {
    maxNumber = Math.abs(maxNumber);
  }
  if (minNumber > maxNumber) {
    return;
  }
  if (minNumber === maxNumber) {
    return maxNumber.toFixed(afterDotNumber);
  }
  const generateNumber = Math.random() * (maxNumber - minNumber) + minNumber;
  return generateNumber.toFixed(afterDotNumber);
}

generateGeoCoordinates(0, 5, 2);
