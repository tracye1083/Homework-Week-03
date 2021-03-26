let generateBtn = document.querySelector("#generate");

function writePassword() {
  prompts();
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

let length = 0;
let special = false;
let numbers = false; 
let lower = false;
let upper = false;

function prompts() {
  checkLength();
  special = confirm("Click OK to use Special Characters in your password.");
  numbers = confirm("Click OK to use Numbers in your password.");
  lower = confirm("Click OK to use Lowercase Letters in your password.");
  upper = confirm("Click OK to use Uppercase Letters in your password.");
}

function checkLength() {
  length = parseInt(prompt("How many characters would you like your password to contain? Must choose between 8 and 128."));
  if ((length <8) || (length > 128)) {
    alert("Try again. Please choose between 8 and 128.");
    checkLength();
  }
}

let pass = [];

let symb = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "<", ">", "?", ".", ",", "/", "\\", "|", "{", "}", "`", "~" ];
let numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sml = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let lrg = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function push() {
  if (special) {
    pass.push(symb);
  }

  if (numbers) {
    pass.push(numb);
  }

  if (lower) {
    pass.push(sml);
  }

  if (upper) {
    pass.push(lrg);
  }
}

function generatePassword() {
  let passString = "";
  for (i = 0; i < length; i++) {
    push();
    if (pass.length === 0) {
      alert("**Please select at least ONE criteria for your password. Press Generate Password to start over.**")
    }
    let randomChoices = pass[Math.floor(Math.random() * pass.length)];
    let selection = randomChoices[Math.floor(Math.random() * randomChoices.length)];

    passString += selection;
  } 
  return passString;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
