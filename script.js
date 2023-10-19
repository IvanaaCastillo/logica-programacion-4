function isNumber(valor) {
  return !isNaN(parseFloat(valor)) && isFinite(valor);
}

function getFibonacci(n) {
  const fibArray = [0, 1];

  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }

  return fibArray;
}

function displayFibonacciSequence() {
  let userInput;
  do {
    userInput = prompt("Ingrese un número para generar la serie de Fibonacci:");
    if (!isNumber(userInput)) {
      alert("Ingrese un número válido.");
    }
  } while (!isNumber(userInput));

  const n = parseInt(userInput);
  const fibonacciSequence = getFibonacci(n);

  const resultContainer = document.getElementById("result");

  if (resultContainer) {
    resultContainer.innerHTML = `Serie de Fibonacci con ${n} números: ${fibonacciSequence.join(", ")}`;
  } else {
    console.log(`Serie de Fibonacci con ${n} números: ${fibonacciSequence.join(", ")}`);
  }
}

displayFibonacciSequence();