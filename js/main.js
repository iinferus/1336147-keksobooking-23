function generateGeoCoordinates(minNumber, maxNumber, afterDotNumber = 0) {
  maxNumber = Math.abs(maxNumber);
  minNumber = Math.abs(minNumber);
  let range = maxNumber - minNumber;
  if (minNumber === maxNumber) {
    return maxNumber.toFixed(afterDotNumber);
  }
  if (minNumber > maxNumber) {
    range = Math.abs(range);
    minNumber = maxNumber;
  }
  return (Math.random() * (range) + minNumber).toFixed(afterDotNumber);
}

generateGeoCoordinates(0, 5, 2);
