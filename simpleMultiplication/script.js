function simpleMultiplication(number) {
  return (number % 2 == 0) ? (number * 8) : (number * 9)
}


// or

// function simpleMultiplication(number) {
//   if(number % 2 == 0) {
//     return number * 8
//   } else {return number * 9}
// }


console.log(simpleMultiplication(2))
console.log(simpleMultiplication(1))
console.log(simpleMultiplication(8))
console.log(simpleMultiplication(4))
console.log(simpleMultiplication(5))

