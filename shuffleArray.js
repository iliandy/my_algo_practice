const shuffle0 = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffle1 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const j = Math.floor(Math.random() * (arr.length - i)) + i;
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffle2 = (arr) => {
  return arr.sort(() => {
    return 0.5 - Math.random()
  })
}



const arr = [0,1,2,3,4,5]
console.log(shuffle0(arr))
console.log(shuffle1(arr))
console.log(shuffle2(arr))
