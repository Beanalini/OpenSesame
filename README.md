# JavaScript Challenge: Password Generator

This challenge forms part of the course work for week 3, Module 3, set by the University of Birmingham and Trilogy Ltd's Coding Bootcamp.

## Project Description
---

The aim of this challenge was to create a password generator application that can be used to generate a random password, based on user selected criteria. 

## Project Requirements
---

This challenge required the underlying JavaScript code, that randomly generates a password and dynamically updates the user interface, to be written. The HTML, and CSS files were provided as starter code.

<a href="https://github.com/coding-boot-camp/friendly-parakeet"> Link to the starter code repository</a>


### Starter Code Mock-up

![](assets/images/password-generator-mockup.png)


The functionality that the JavaScript needs to implement is defined by the user story and acceptance criteria listed below.  



### User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

```


### Acceptance Criteria
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


## Approach 
---
Password generator functionality implemented in JavaScript:

- Input box and checkboxes are used by the user to select password length and selection of character types respectively.
- An event listener has been added to the generate password button; when the 'generate password' button is clicked, the password generation code is activated.
- The user selection is validated:
  - The password length input box has max and min properties set.  However, this does not prevent the user typing in a value outside of the allowed range (8-128 characters). If a user inputs a password length outside the allowed range, an alert message prompts the user to input a value in the allowed range. The default setting for the password word length has been set to 10 characters.
  - If the user does not select any character types, they are presented with an alert message requesting character type selection.
- Character type arrays are created from unicode characters using the JS CharCode  property.
- The method used to generate a password uses the math.random function. However, using a random function could result in no characters of a particular type being selected.  Therefore, in order to mitigate against this scenario and meet the acceptence criteria, which requires 'a password to be generated that meets the user selected criteria', I initially select one character, randomly, from each user selected character array and store it in a password array.  A variable is used to hold the number of character types the user has selected and is used to adjust the number of for loop iterations needed to fill the password array.
- A random number generator provides the index which is used to select a character from an array formed from concatenating all the user selected character arrays. The selected character is added to the password array. A for loop is used to repeat this functionality until the required number of password characters have been generated.  

 
## Usage
---
- Open the  <a href="https://beanalini.github.io/OpenSesame/">Password Generator App</a>
- Type the required password length into the input box, or alternatively use the up/down arrows inside the input box to select a value (the default setting is 10 character). 
- Use the checkboxes to select the required character types to include in the password.
- Click on the 'Password Generate' button.
- A password meeting your selection criteria is generated and rendered to the screen.
- If you enter a password length outside the allowed range, an alert message will ask you to select a value within the accepted range.
- If you fail to select any character types, an alert message will ask you to make a selection.

##  Password Generator Screen Shots
---

Password generator Landing Page

![password generator app](assets/images/psw_gen_landing.png)




User prompt: no character types selected:

![](assets/images/no_char_types_selected.png)

User prompt: Password length not within allowed range

![](assets/images/psw_length_not_selected.png)

User selection criteria and generated password:

![](assets/images/in-action.png)

## Deployed Website
---

<a href="https://beanalini.github.io/OpenSesame/">Link to the deployed website </a>


<a href="https://github.com/Beanalini/OpenSesame"> Link to the password generator repository</a>

## Technologies Used
---
- HTML
- CSS
- JavaScript
