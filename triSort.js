function triSort(arr){
  arr.sort(function(a, b){ return a - b });
  third_len = parseInt(Math.ceil(arr.length/3.))
  if (arr.length % 3 == 1) {
    return [arr.slice(0, third_len), arr.slice(third_len, 2*third_len-1), arr.slice(2*third_len-1)]
  }
  return [arr.slice(0, third_len), arr.slice(third_len, 2*third_len), arr.slice(2*third_len)]
}

arr = [2,1,3,4,7,5,9,6,8,13,12,11,10,0,15,16,14,100,101]
// arr = [2,1,3]
// arr = [2,1,3,4]
// arr = [2,1,3,4,6]

console.log(triSort(arr));
