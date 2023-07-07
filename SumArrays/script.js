function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
  
    if (numbers.length <= 0) {
      return 0;
    }
  
    return total;
  }