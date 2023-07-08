function squareDigits(num) {
  let numString = num.toString();
  let result = '';

  for (let i = 0; i < numString.length; i++) {

    let digit = parseInt(numString[i]);
    let squaredDigit = digit ** 2;
    result += squaredDigit.toString();
  }

  return parseInt(result);
}
