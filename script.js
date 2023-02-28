var alphabet;
var letters ;
var numbers ;
var chatchers; 

function getValueCheckbox() {
  const checkbox = document.getElementById("myCheckbox");
  const checkbox2 = document.getElementById("myCheckbox2");
  const checkbox3 = document.getElementById("myCheckbox3");

  if (checkbox.checked) {
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    letters = alphabet.split("");
    console.log(letters)
  } 
  if(checkbox2.checked){
    numbers = [1,2,3,4,5,6,7,8,9,10]
    console.log(numbers)
  }
  if(checkbox3.checked){
   chatchers = ["!","@","#","$","%","^","&","*","(",")"]
   console.log(chatchers)
  }


}
