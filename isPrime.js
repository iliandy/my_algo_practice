const isPrime = (num) => {
  let divisor = 2;

  while (divisor < num) {
    if(num % divisor == 0){
     return false;
    }
    divisor++;
  }
  return true;
}

// console.log(isPrime(137));
// console.log(isPrime(10));
