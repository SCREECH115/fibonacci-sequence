const display = document.getElementById("display");

const fibonacci = (n, mem = {}) => {
  if ([0, 1].includes(n)) return 1;

  if (mem[n]) {
    return mem[n];
  } else {
    mem[n] = fibonacci(n - 1, mem) + fibonacci(n - 2, mem);
    return mem[n];
  }
};

const handleClick = () => {
  let n = Number(document.getElementById("number").value);
  display.innerHTML =
    "Ciąg Fibonacciego dla podanej liczby wynosi: <br/>" + fibonacci(n);
};
