function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count += 1;
    } else if (arrayOfSheep[i] !== false && arrayOfSheep[i] !== true) {
      console.log("Bad Value:", arrayOfSheep[i]);
    }
  }
  return count;
}
