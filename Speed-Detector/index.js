function speedDetector() {
    let speed = prompt('Enter your Speed: ');  // function prompts the user to input the speed
  const speedLimit = 70;
  // A point is given for speed above the speedlimit. Every 5km above earns a point.
  const kmPerDemerit = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    // math.floor ensures only whole numbers are returned. Math.floor rounds down
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log("Points: " + demeritPoints);
    }
  }
}
speedDetector();