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
    var randomIndex = Math.floor(Math.random() * letters.length);
    var randomLetter = letters[randomIndex];
    console.log(randomLetter);
  }
  if (checkbox2.checked) {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var randomIndex = Math.floor(Math.random() * numbers.length);
    var randomNumber = numbers[randomIndex];
    var test = [randomChachers,randomNumber,randomLetter]
    console.log(test);
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
    var randomIndex =  Math.floor(Math.random() * chatchers.length)
    var randomChachers  = chatchers[randomIndex]
    console.log(randomChachers)
  }
}
