let calculator = document.getElementById("calculator");
let submit = document.querySelector(".submit");
let result = document.querySelector(".result");
let nums = document.querySelectorAll(".num");
let reset = document.querySelector(".reset");
let calc = document.querySelector(".calc");

nums.forEach(function (num) {
  num.addEventListener("click", function (e) {
    let operation = result.value;
    let element = e.target.value;

    if (!operation) {
      if (element === "-" || !isNaN(element)) {
        result.value = operation + element;
      } else {
        result.value = "";
      }
    } else {
      if (!isNaN(element)) {
        result.value = operation + element;
      } else {
        let list_numbers = operation.split("");
        if (
          list_numbers[list_numbers.length - 1] === "/" ||
          list_numbers[list_numbers.length - 1] === "+" ||
          list_numbers[list_numbers.length - 1] === "-" ||
          list_numbers[list_numbers.length - 1] === "*"
        ) {
          result.value = operation;
        } else {
          result.value = operation + element;
        }
      }
    }
  });
});

calc.addEventListener("click", function (e) {
  result.value = eval(result.value)
});

reset.addEventListener("click", function () {
  result.value = "";
});
