function sortArray(array) {
  var oddNumbers = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddNumbers.push(array[i]);
    }
  }
  oddNumbers.sort(function(a, b) {
    return a - b;
  });

  var j = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = oddNumbers[j];
      j++;
    }
  }

  return array;
}


console.log(sortArray([5,3,2,8,1,4]))
console.log(sortArray([5,3,1,8,0]))