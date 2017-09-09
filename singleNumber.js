// https://leetcode.com/problems/single-number/description/
// Given an array of integers, every element appears twice except for one. Find that single one.
//
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
const singleNumber = (arr) => {
  // // dictionary/hash/object method
  // let nums = {};
  // for (let num of arr) {
  //   if (!(num in nums)) {
  //     nums[num] = 1;
  //   }
  //   else {
  //     nums[num] += 1;
  //   }
  // }
  // return Object.keys(nums).find(key => nums[key] === 1);

  // math method
  // create set of unique values of arr
  let arrSet = new Set(arr);

  // callback function to sum array
  const getSum = (total, num) => {
    return total + num;
  }

  let sumSet = [...arrSet].reduce(getSum, 0);
  let sumArr = arr.reduce(getSum, 0);
  // sum of double unique values - sum of arr = single unique element
  return 2 * sumSet - sumArr
}

const arr = [1, 1, 2, 2, 3, 4, 4, 6, 6, 0, 0]
console.log(singleNumber(arr));
