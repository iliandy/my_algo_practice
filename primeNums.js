// return all prime numbers between 0 and 100
const primeNums = () => {
  let resArr = [];

  for (let i = 0; i <= 100; i++) {
    if (i < 10 && (i == 2 || i == 3 || i == 3 || i == 5 || i == 7) || (i > 10 && !(i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0))) {
      resArr.push(i);
    }
  }
  return resArr;
}

console.log(primeNums());
