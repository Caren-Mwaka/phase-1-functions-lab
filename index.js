function distanceFromHqInBlocks(someValue) {
  if (someValue === 43){
    return 1;
  } else if (someValue === 50){
    return 8;
  } else if (someValue < 42){
    return 42 - someValue;
  } else {
    return someValue - 42;
  }
}

console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(someValue) {
  let numberOfBlocks = distanceFromHqInBlocks(someValue);
  let distanceInFeet = numberOfBlocks * 264;
  return distanceInFeet;
}

console.log(distanceFromHqInFeet(43)); 

function distanceTravelledInFeet(someValue, destination) {
  let numberOfBlocksTravelleved = Math.abs(destination - someValue)
  let distanceInFeet = numberOfBlocksTravelleved * 264;
  
  return distanceInFeet;
  
}
console.log(distanceTravelledInFeet(43,48))
function calculatesFarePrice(someValue, destination) {
  let distanceInFeet = Math.abs(destination - someValue) * 264;

  if (distanceInFeet <= 400) {
    return 0;
  }

  else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  }
 
  else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25 ;
  }
  
  else {
    return 'cannot travel that far';
  }
}
console.log(calculatesFarePrice(50, 58))

