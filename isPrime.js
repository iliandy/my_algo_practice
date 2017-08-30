// using while loop
const isPrime1 = (num) => {
  let divisor = 2;

  if (num < 4) {
    return true;
  }

  while (divisor < num) {
    if (num % divisor == 0){
     return false;
    }
    divisor++;
  }
  return true;
}

// using recursion
const isPrime2 = (num, divisor = 2) => {
  if (num < 4 || num == divisor) {
    return true;
  }
  if (num % divisor == 0) {
    return false;
  }
  return isPrime2(num, divisor+1);
}


console.log(isPrime1(137));
console.log(isPrime1(10));
console.log(isPrime1(1));

console.log(isPrime2(137));
console.log(isPrime2(10));
console.log(isPrime2(1));
