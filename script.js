var alphabet;
var letters;
var numbers;
var chatchers;

function getValueCheckbox() {
  const checkbox = document.getElementById("myCheckbox");
  const checkbox2 = document.getElementById("myCheckbox2");
  const checkbox3 = document.getElementById("myCheckbox3");
  const result = document.getElementById("result");

  if (checkbox.checked) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let letters = alphabet.split("");
    let randomIndex = Math.floor(Math.random() * letters.length);
    let randomLetter = letters[randomIndex];
    console.log(randomLetter);
  }
  if (checkbox2.checked) {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let randomIndex = Math.floor(Math.random() * numbers.length);
    let randomNumber = numbers[randomIndex];
    console.log(randomNumber);
  }
  if (checkbox3.checked) {
    chatchers = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "[",
      "]",
      "_",
    ];
    let randomIndex =  Math.floor(Math.random() * chatchers.length)
    let randomChachers  = chatchers[randomIndex]
    console.log(randomChachers)
  }
}
