const sortNums = (nums) => {
  return nums.sort((a, b) => {
    return a - b
  })
}
const sortStrs = (strs) => {
  return strs.sort((a, b) => {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else {
      return 0
    }
  })
}

const nums = [7, 3, 5, 8, 4, 9, 0, 1]
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

console.log(sortNums(nums))
console.log(sortStrs(fruits))
