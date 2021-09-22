# 03 JavaScript: Password Generator

For this project, I've developed an application that enables employees to generate random passwords based on criteria that they’ve selected.

This is my third week of the bootcamp. In this week, I learnt some of the advanced Javascript skills which I've implemented while working on this application.

I was presented with the starter code and following acceptance criteria

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## 💡 Technical Features:

- Variable declaration area
- An event listener (onclick) called generatePassword
  - This will prompt the user for input between 8-128
  - This variable is changed to an interger using ParseInt()
  - This will validate that the input is a number within range, or is a number
  - This then uses the input to determine the types (or choices) or letters of characters used, using an if statement
  - This then assigns values to the variables using arrays for character, number or alphabet
- Another variable is created to concatenate the above variables
- A for loop will loop through the enter prompt until it reaches the number entered by user.
- A password variable takes the value from the for loop, and converts it to a string.
- The string value then populates into the text area for the user using a UserInput function.

## Mock-up

Please find below the application screenshot:

![Password Generator Application Screenshot.](Assets/img/03-javascript-homework-demo.png)

## 🔗 Project Link

https://ajaykulkarni01.github.io/Password-Generator/

   <br/>

---
