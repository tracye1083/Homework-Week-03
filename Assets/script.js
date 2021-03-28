let specialArr = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
let numericArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let selectedArr = [];
let requiredArr = [];
let mergedArr = [];
let passLength = 0;
let userPassword = '';

let genPasswordButton = document.querySelector('#generate');
let copyPasswordButton = document.querySelector('#copyButton');

genPasswordButton.addEventListener('click', function() {
    passReset();
    passLength = prompt('How many characters would you like your password to contain? Must choose between 8 and 128.');
    if (parseInt(passLength) < 8 || parseInt(passLength) > 128) {
        alert('Try again. Please choose between 8 and 128.');
    } else if (passLength === null) {
        alert('A password will not be generated.');
    } else if (isNaN(passLength) === true || passLength === '') {
        alert('Please use numerical numbers and try again.');
    } else {
        selectedCharacters();
    }
    document.getElementById('password').textContent = userPassword;
});

function selectedCharacters() {
    let specialYes = confirm('Click OK to use Special Characters in your password.');
    if (specialYes === true) {
        selectedOption(specialArr);
    }
    let numericYes = confirm('Click OK to use Numbers in your password.');
    if (numericYes === true) {
        selectedOption(numericArr);
    }
    let lowerYes = confirm('Click OK to use Lowercase Letters in your password.');
    if (lowerYes === true) {
        selectedOption(lowerArr);
    }
    let upperYes = confirm('Click OK to use Uppercase Letters in your password.');
    if (upperYes === true) {
        selectedOption(upperArr);
    }
    if (upperYes === false && lowerYes === false && numericYes === false && specialYes === false) {
        alert('**Please select at least ONE criteria for your password. Press Generate Password to start over.**');
    }
    let mergedArr = [].concat.apply([], selectedArr);
    requiredChars(mergedArr);
}

function passReset() {
    mergedArr.length = 0;
    selectedArr.length = 0;
    requiredArr.length = 0;
}

function selectedOption(chosen) {
    let required = Math.floor(Math.random() * chosen.length);
    requiredArr.push(chosen[required]);
    selectedArr.push(chosen);
}

function requiredChars(merged) {
    let newLength = passLength - requiredArr.length;
    for (let i = 0; i < newLength; i++) {
        let randomChar = Math.floor(Math.random() * merged.length);
        requiredArr.push(merged[randomChar]);
    }
    shuffle(requiredArr);
    userPassword = requiredArr.join('');
}

copyPasswordButton.addEventListener('click', function() {
    let emptyEl = document.getElementById('password').textContent;
    if (emptyEl === '') {
        alert('You have not yet generated a password.');
    } else {
        document.getElementById('password').select();
        document.execCommand('copy');
        alert('Your password: ' + userPassword + ' has been copied to the clipboard.');
    }
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
