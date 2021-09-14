var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elResult = document.querySelector(".result");

function fiveseven(number = 0) {
  var result = "";

  if (number % 5 === 0 && number % 7 === 0 && number != 0) {
    result = "fizzbuzz";
  } else if (number % 5 === 0 && number != 0) {
    result = "fizz";
  } else if (number % 7 === 0 && number != 0) {
    result = "buzz";
  } else {
    result = number;
  }

  return result;
}

elForm.addEventListener("submit", function (stop) {
  stop.preventDefault();

  var inputValue = Number(elInput.value.trim());

  elResult.textContent = `${fiveseven(inputValue)}`;
});
