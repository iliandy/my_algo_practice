const primeFactors = (num) => {
  let factors = [], divisor = 2;

  while (num > 2) {
    if (num % divisor == 0) {
      if (factors.indexOf(divisor) == -1){
        factors.push(divisor);
      }
      num /= divisor;
    }
    else {
      divisor++;
    }
  }
  return factors;
}

console.log(primeFactors(125));
