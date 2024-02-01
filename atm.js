
const correctPIN = "1234";

//To prompt user for PIN
function enterPIN() {
  return prompt("Enter your PIN!");
}

// Then to prompt user for username
function enterUsername() {
  return prompt("Enter your username:");
}

// Function to validate user details

function validateUserDetails(pin, username) {
  
  if (pin = 1234) {
    return true; // PIN is correct
  } else {
    return false; // PIN is incorrect
  }
}

// Main function 
function loginSystem() {
  const userPIN = enterPIN();
  const userUsername = enterUsername();

  if (validateUserDetails(userPIN, userUsername)) {
    alert(`${userUsername} Login successful. Welcome!`);
  } else {
    alert(`${userUsername} Error: Incorrect PIN. Please try again.`);
  }
}

// Call the main function to start the login system
loginSystem();




//OR

function userDetailsfuc(){
  const userDetails = {username: 'dera12', pin:12345}
  return userDetails
}

const resultDetails = userDetailsFuc()

function validateUserDetails() {
  let enterUsername = prompt('Enter username')
  let enterPin = Number(prompt('Enter pin'))

  if (enterUsername === resultDetails.username && enterPin === resultDetails.pin){
    alert('successfully logged in')
  }
  else(
    alert ('Wrong username or pin')
  )

  console.log(resultDetails.username)

}

validateUserDetails()