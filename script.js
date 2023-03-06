
function getValueCheckbox() {
  const checkbox = document.getElementById("myCheckbox");
  const checkbox2 = document.getElementById("myCheckbox2");
  const checkbox3 = document.getElementById("myCheckbox3");
  const range = document.getElementById("myRange");
  const valor = document.getElementById("password");

  let result = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let letters = alphabet.split("");
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "_"];

  let passwordLength = range.value; 

  range.addEventListener("input", function () {
    passwordLength = this.value;
    result = generatePassword();
    valor.innerHTML = result;
  });

  let mixedChars = [];

  if (checkbox.checked) {
    mixedChars = mixedChars.concat(letters);
  }

  if (checkbox2.checked) {
    mixedChars = mixedChars.concat(numbers);
  }

  if (checkbox3.checked) {
    mixedChars = mixedChars.concat(characters);
  }
  if(!checkbox.checked & !checkbox2.checked & !checkbox3.checked){
    mixedChars = ['']
  }


  for (let i = mixedChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mixedChars[i], mixedChars[j]] = [mixedChars[j], mixedChars[i]];
  }

  function generatePassword() {

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * mixedChars.length);
      let randomChar = mixedChars[randomIndex];
      password += randomChar;
    }
    return password;
  }

  return generatePassword();
}

const range = document.getElementById("myRange");

let passwordLength = range.value;
range.addEventListener("input", () => {
  passwordLength = range.value;
  const valor = document.getElementById("password");
  valor.innerHTML = getValueCheckbox();
});

document.addEventListener("DOMContentLoaded", () => {
  const valor = document.getElementById("password");
  valor.innerHTML = getValueCheckbox();
});

