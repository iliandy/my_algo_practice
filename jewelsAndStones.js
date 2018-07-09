// Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/description/
const numJewelsInStones = (J, S) => {
  // const regex = new RegExp(J, 'g')
  // return (S.match(regex) || []).length
  return S.split(J).length - 1 // faster
}

const J = 'o'
const S = 'Hello world'

console.log(numJewelsInStones(J, S))
