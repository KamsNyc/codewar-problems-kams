function enough(cap, on, wait) {
  let total = on + wait
  return (total >= cap) ? (total - cap) : 0
}


console.log(enough(10, 5, 5))
console.log(enough(100, 60, 50))
console.log(enough(20, 5, 5))