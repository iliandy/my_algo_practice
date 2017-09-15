// https://leetcode.com/problems/single-number/description/
// Given an array of integers, every element appears twice except for one. Find that single one.
//
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
const singleNumber = (nums) => {
  // // dictionary/hash/object method
  // let numsObj = {};
  // for (let num of nums) {
  //   if (!(num in numsObj)) {
  //     numsObj[num] = 1;
  //   }
  //   else {
  //     numsObj[num] += 1;
  //   }
  // }
  // return Object.keys(numsObj).find(key => numsObj[key] === 1);

  // math method
  // create set of unique values of nums
  let numsSet = new Set(nums);

  // callback function to sum nums
  const getSum = (total, num) => {
    return total + num;
  }

  let sumSet = [...numsSet].reduce(getSum, 0);
  let sumNums = nums.reduce(getSum, 0);
  // sum of double unique values - sum of nums = single unique element
  return 2 * sumSet - sumNums
}

const nums = [1, 1, 2, 2, 3, 4, 4, 6, 6, 0, 0]
console.log(singleNumber(nums));
