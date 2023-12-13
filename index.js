// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  return (pickupLocation > 40) ? pickupLocation - 42 : 42 - pickupLocation;

}

function distanceFromHqInFeet(pickupLocation) {
  const allBlocks = distanceFromHqInBlocks(pickupLocation);
  return allBlocks * 264; 
}

function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  return blocksTravelled * 264; 
}

function calculatesFarePrice(start, destination) {
  const feetTravelled = distanceTravelledInFeet(start, destination);

  if (feetTravelled <= 400) {
    return 0;
  }

  if (feetTravelled <= 2000) {
    return (feetTravelled - 400) * 0.02;
  }

  if (feetTravelled < 2500) {
    return 25; 
  }

  return 'cannot travel that far';
}
