// https://leetcode.com/problems/single-number/description/
// Given an array of integers, every element appears twice except for one. Find that single one.
//
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
const singleNumber = (arr) => {
  let nums = {};
  for (let num of arr) {
    nums[num] = 1;
  }
  console.log(nums);
  return Object.keys(nums).find(key => nums[key] === 1);
}

const arr = [1,1,2,2,3,4,4,6,6,0,0]
console.log(singleNumber(arr));
