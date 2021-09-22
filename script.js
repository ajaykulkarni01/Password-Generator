// User input variables: 
var length;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Start Password variable values: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Lowercase alphabets
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase alphabets
alpha2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var field = document.querySelector("#generate");

field.addEventListener("click", function () {
  var passValue = generatePassword();
  document.getElementById("password").placeholder = passValue;
});

// Start function to generate password
function generatePassword() {
  // Asks for user input
  var length = 0;
  while (length < 8 || length > 128) {
    // console.log({length})
    length = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // console.log({length})
    // console.log(length );
    // If user clicks cancel
    if(!length){
      length = 0;
    }
  }
  // Continues once user input is validated
  confirmNumber = confirm("Will this contain numbers?");
  confirmCharacter = confirm("Will this contain special characters?");
  confirmUppercase = confirm("Will this contain Uppercase letters?");
  confirmLowercase = confirm("Will this contain Lowercase letters?");

  // Else if for 4 negative options
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    length = alert("You must choose a criteria!");
  }
  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = character.concat(number, alpha, alpha2);
  }
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  } else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  } else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  } else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }
  // Else if for 2 positive options
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  } else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);
  } else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
  } else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);
  } else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);
  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
    choices = character;
  } else if (confirmNumber) {
    choices = number;
  } else if (confirmLowercase) {
    choices = alpha;
  } else if (confirmUppercase) {
    choices = alpha2;
  }

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // Start random selection variables:
  // Random selection for all variables:
  for (var i = 0; i < length; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  var passValue = password.join("");
  UserInput(passValue);
  return passValue;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(passValue) {
  document.getElementById("password").textContent = passValue;
}