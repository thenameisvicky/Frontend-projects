const passwordBox = document.getElementById("password");
const len = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const numbers = "1234567890";
const symbols = "!@#$%^&*()<>?~";

const allChar = upperCase + lowerCase + symbols + numbers;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (len > password.length) {
    password +=  allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}