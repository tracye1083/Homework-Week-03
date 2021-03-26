// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  prompts();
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

let length = 0;
let special = false;
let numbers = false; 
let lowercase = false;
let uppercase = false;

function prompts() {
  checkLength();
  special = confirm("Click OK to use Special Characters in your password.");
  numbers = confirm("Click OK to use Numbers in your password.");
  lowercase = confirm("Click OK to use Lowercase Letters in your password.");
  uppercase = confirm("Click OK to use Uppercase Letters in your password.");
}

function checkLength() {
  length = parseInt(prompt("How many characters would you like your password to contain? Must choose between 8 and 128."));
  if ((length <8) || (length > 128)) {
    alert("Try again. Please choose between 8 and 128.");
    checkLength();
  }
}

let symb = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "[", "]", "<", ">", "?", ".", ","];
let numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sml = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let lrg = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
