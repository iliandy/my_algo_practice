// Durstenfeld Shuffle, O(n) time complexity
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
const shuffle0 = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));  // 0 ≤ j ≤ i
    // const temp = arr[i]
    // arr[i] = arr[j]
    // arr[j] = temp
    [arr[i], arr[j]] = [arr[j], arr[i]]   // es6 destructuring assignment, ie swap
  }
  return arr
}

const shuffle1 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const j = Math.floor(Math.random() * (arr.length - i)) + i;   // i ≤ j < n
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Should be avoided, does not randomize as well and slower
const shuffle2 = (arr) => {
  return arr.sort(() => {
    return 0.5 - Math.random()
  })
}



const arr = [0,1,2,3,4,5]
console.log(shuffle0(arr))
console.log(shuffle1(arr))
console.log(shuffle2(arr))
