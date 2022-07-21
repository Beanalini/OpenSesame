//Access HTML elements
var generate_btn = document.getElementById("generate");
var passwordText = document.querySelector("#password");


/*Create character arrays using unicode character codes.  Pass the number ranges of the required unicode characters as arguments to characterTypeArray()*/
const lowercase = characterTypeArray(97, 122);  //create lower case array
console.log(lowercase);
const uppercase = characterTypeArray(65, 90); //create upper case array
console.log(uppercase);
const symbol_arr = characterTypeArray(33, 47)  //Create symbol array
  .concat(characterTypeArray(58, 64))
  .concat(characterTypeArray(91, 96))
  .concat(characterTypeArray(123, 126));
  console.log(symbol_arr.length);
  console.log();
const num_arr = characterTypeArray(48, 57); //create number array
 
//console.log(lowercase.length + uppercase.length + num_arr.length + symbol_arr.length);

/*characterTypeArray()  loops through the character range numbers, and stores a unicode character in an array on each  iteration of the for loop. 
The character array is returned to the calling function */
function characterTypeArray(range_l, range_h) {
  const array = [];
  for (let i = range_l; i <= range_h; i++) {
    array.push(String.fromCharCode(i));
  }
  return array;
} 

//add event listener to the generate button, when activated calls writePassword()
generate_btn.addEventListener("click", writePassword);

//writePassword()  calls generatePassword() which returns the password and writes it to the screen inside the password text area.
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

 /******* Validate user selection ********/ 

//Display alert message if password length not within specified range of 8 - 128 characters.
if (psw_length < 8 || psw_length > 128){
  alert("Warning!   Please select a password length between 8 to 128 characters.")

}

//Display an alert message if the user has not selected any character types
if (upper_criteria === false && lower_criteria === false && num_criteria === false && sym_criteria === false) 
{
  alert("Warning! Please select required character types");
  return(null)
}


//for error checking
console.log("length " + psw_length +  " uppercase " + upper_criteria + " lowercase " + lower_criteria + " numbers " + num_criteria  + " symbols " + sym_criteria);
 
/**after validating user selection criteria:
 [1] Test for each charater type selcted by the user then..
 [2] Use of the random function could result in no characters of a particular type being selected. In order to mitigate against this scenario, I initially select one character from each user selected character array, store it in the password array, with the reamining characters added using a for loop further down.
 [3] Increment num_char_types var - this will be used to adjust the number of for loop iterations needed to fill the password array.
 [4] concatnate character arrays selected by the user which will be used to select the remaining password characters in the for loop below.
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


//for error checking
console.log(psw);

return(psw)

}








