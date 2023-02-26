const alphabet = "abcdefghijklmnopqrstuvwxyz"

const letters = alphabet.split("")

const numbers = [1,2,3,4,5,6,7,8,9,10]

function pegarValorCheckbox() {
    // Obter referência ao checkbox
    const checkbox = document.getElementById("myCheckbox");
  
    // Verificar se o checkbox está marcado
    if (checkbox.checked) {
      // Obter o valor do checkbox
      const valor = checkbox.value;
      console.log("Valor do checkbox:", valor);
    }
  }