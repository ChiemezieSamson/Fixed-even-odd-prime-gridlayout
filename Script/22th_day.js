const theDiv = document.querySelectorAll(".contianer");
const theul = document.querySelectorAll("ul");
theul.class = "numberContianer";
theul.id = "NUM";
let number;
for (let i = 0; i <= 101; i++) {
  number = document.createElement("li");
  number.class = "num";
  number.style.fontSize = "24px";
  number.textContent = i;
  for (const ul of theul) {
    ul.appendChild(number);
    number.style.listStyle = "none";
    number.style.padding = "20px";
    number.style.width = "130px";
    number.style.margin = "3px";
  }
  if (i % 2 === 0) {
    number.style.backgroundColor = "green";
  }
  if (i % 2 === 1) {
    number.style.backgroundColor = "yellow";
  }
  function isPrime(number) {
    {
      if (number <= 1) return false;

      // The check for the number 2 and 3
      if (number <= 3) return true;

      if (number % 2 == 0 || number % 3 == 0) return false;

      for (var i = 5; i * i <= number; i = i + 6) {
        if (number % i == 0 || number % (i + 2) == 0) return false;
      }

      return true;
    }
  }
  if (isPrime(i)) {
    number.style.backgroundColor = "red";
  }
}

// level three start here
