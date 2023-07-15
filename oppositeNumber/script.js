function opposite(number) {
  if (number >= 0) {
    return -Math.abs(number);
  } else {
    return Math.abs(number);
  }
}



console.log(opposite(1))
console.log(opposite(0))
console.log(opposite(-127232.23232))
console.log(opposite(-5))
console.log(opposite(-3))