// return all prime numbers between 0 and 100
const primeNums = (maxNum) => {
//   let primes = [];
//
//   // using sieve of Eratosthenes algo
//   for (let i = 0; i <= maxNum; i++) {
//     if (i < 10 && (i == 2 || i == 3 || i == 3 || i == 5 || i == 7) || (i > 10 && !(i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0))) {
//       primes.push(i);
//     }
//   }
//   return primes;
// }
//
  let primes = [2], isPrime;
  // test only odd numbers, starting with 3
  for (let i = 3; i < maxNum; i+=2){
    isPrime = true;
    // test number i against primes found thus far
    for (let j = 0; j < primes.length; j++){
      if (i % primes[j] == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(primeNums(300));
