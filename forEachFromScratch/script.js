let Animals = ["cat", "dog", "rabbit", "hamster", "guinea pig", "parrot", "goldfish", "turtle", "snake", "horse", "elephant", "monkey", "giraffe", "lion", "tiger", "bear", "penguin", "dolphin", "kangaroo", "koala"];


const listAll = (arr, cb) => {
  for(let i = 0; i < arr.length; i++){
    const listItem = arr[i]
    cb(listItem)
  }
}

listAll(Animals, (Animals) => {
  console.log(Animals)
})
