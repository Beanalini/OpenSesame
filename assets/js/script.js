//Decalre global variables


var generate_btn = document.getElementById("generate");
var passwordText = document.querySelector("#password");

////Create character arrays from JS CharCode 

const lowercase = characterTypeArray(97, 122);  //create lower case arrary
console.log(lowercase);
const uppercase = characterTypeArray(65, 90); //create upper case arry
console.log(uppercase);
const symbol_arr = characterTypeArray(33, 47)  //Create symbol array
  .concat(characterTypeArray(58, 64))
  .concat(characterTypeArray(91, 96))
  .concat(characterTypeArray(123, 126));
  console.log(symbol_arr.length);
  console.log();
const num_arr = characterTypeArray(48, 57);//create number array

console.log(lowercase.length + uppercase.length + num_arr.length + symbol_arr.length);

/************creates the character arrays, lower case, upper case, symbol and numeric from CharCode**************/
function characterTypeArray(range_l, range_h) {
  const array = [];
  for (let i = range_l; i <= range_h; i++) {
    array.push(String.fromCharCode(i));
  }
  return array;
} 

//add event listener to the generate button
generate_btn.addEventListener("click", writePassword);

//writePassword  is called when the password generate button is clicked. It calls generatePassword() which returns the pass word which is then written to the text area.
function writePassword() {

  //showUserSelect();

  var password = generatePassword();

  passwordText.value = password;
}


function generatePassword() {
  //Initialise Variables
  var passWord = []; // holds  generated password
  var userChar_arr = []; //contains all user required charaters 
  var num_char_types = 0; // holds the number of selected character types 
  var psw = 0; //password string returned to calling function
  
  passwordText.value = ""; //Clear previous password from the text area  

//Get user selected data
 const psw_length = document.getElementById("length").value;
 const upper_criteria = document.getElementById("uppercase").checked;
 const lower_criteria = document.getElementById("lowercase").checked;
 const num_criteria = document.getElementById("numbers").checked;
 const sym_criteria = document.getElementById("symbols").checked;

 /******* Validate if user selection ********/ 

//Display alert message if password length not within specified range of 8 - 128 characters.
if (psw_length < 8 || psw_length > 128){
  alert("Warning!   Please select a password length between 8 to 128 characters.")

}

//Display an alert if the user has not selected any character types
if (upper_criteria === false && lower_criteria === false && num_criteria === false && sym_criteria === false) 
{
  alert("Warning! Please select required character types");
  return(null)
}


//for error checking
console.log("length " + psw_length +  " uppercase " + upper_criteria + " lowercase " + lower_criteria + " numbers " + num_criteria  + " symbols " + sym_criteria);
 
/**if the user has selected a particular character type, do the following:
 [1] Ensure at least 1 of the required characters appears in the password.
 [2] Increment num_char_types var - this will be used to adjust the remaining number of password characters in the for loop.
 [3] Add character array to array used to randomly select the remaining password characters.
 */
  if (lower_criteria === true) {  
  passWord.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
  num_char_types++;
  userChar_arr = userChar_arr.concat(lowercase);
  console.log("Lower: " + passWord);
}

if(upper_criteria === true) {
  passWord.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
  num_char_types++;
  userChar_arr = userChar_arr.concat(uppercase);
  console.log("upper: " + passWord);
}

if(sym_criteria === true) {
  //create symbol arrary  
  passWord.push(symbol_arr[Math.floor(Math.random() * symbol_arr.length)]);
  num_char_types++;
  userChar_arr = userChar_arr.concat(symbol_arr);
  console.log("symbol: " + passWord);
}

if(num_criteria === true) {    
  passWord.push(num_arr[Math.floor(Math.random() * num_arr.length)]);
  num_char_types++;
  userChar_arr = userChar_arr.concat(num_arr);
  console.log("num: " + passWord);
}

console.log("line 121 " + "user selected char types" + num_char_types + " " + passWord);


//Randomly select password characters from the array of user selected characters.
for(i = 0; i < (psw_length - num_char_types); i ++) {

  passWord.push(userChar_arr[Math.floor(Math.random() * userChar_arr.length)]);
}
//for error checking
console.log(passWord +  "  " + passWord.length) ;

//create a string from the array of password characters
psw = passWord.join('');

//Change the display attribute to none, the user needs to refresh the screen to change the character types

//for error checking
console.log(psw);
return(psw)



}








