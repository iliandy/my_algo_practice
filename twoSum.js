// https://leetcode.com/problems/two-sum/description/
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
const twoSum = (nums, target) => {
  ansArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(target - nums[i])) {
      ansArr.push(i);
    }
  }
  return ansArr;

}

let nums = [2, 7, 11, -3, 15], target = 12;
console.log(twoSum(nums, target));
