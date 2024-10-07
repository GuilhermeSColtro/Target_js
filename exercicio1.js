function seqFibonacci(num) {
  if (num === 0 || num === 1) return true; 

  let a = 0;
  let b = 1;
  let proximo = a + b;

 
  while (proximo <= num) {
    if (proximo === num) {
      return true; 
    }
    a = b;
    b = proximo;
    proximo = a + b;
  }

  return false; 
}


function testeFibonacci(num) {
  if (seqFibonacci(num)) {
    console.log(`${num} pertence a sequência de Fibonacci.`);
  } else {
    console.log(`${num} não pertence a sequência de Fibonacci.`);
  }
}

testeFibonacci(5); 
testeFibonacci(25); 
