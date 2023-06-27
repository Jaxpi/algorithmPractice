function fibonacci() {
  let n = document.getElementById("userInput").value;
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  document.getElementById("fibDisplay").innerHTML = fib.join(", ");
}

document
  .getElementById("userInput")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
      document.getElementById("userButton").click();
    }
  });
