// //All fields check

//        let username = (prompt("Enter your username")) 
//        if (username.length < 8 || username.includes (" ") ) {
//         alert (" Username must be at least 8 characters and must not contain spaces")
//           }
  
//        let age = Number (prompt ("Enter your age"))
//        if (age <25 || age > 33) {
//         alert (" Age must be between 25 and 33")
//         }

//         let email = (prompt("Enter your email"))
//         if (!email.includes ("@") || email.length < 8) {
//          alert ("Invalid Email format")
//         }

//        let courseofstudy = (prompt("Enter your course of study")) 

//        function generateTrackingCode(username, age, course, email) {

//        {
//         let trackingCode = `SUN${Math.floor(Math.random() * 90000) + 10000}`;
        
//         if (course.toLowerCase() === 'engineering') {
//           trackingCode += 'ENG';
//         } else if (course.toLowerCase() === 'science') {
//           trackingCode += 'SCS';
//         } else {
//            alert("Invalid course of study. Please choose either 'Engineering' or 'Science'.")
//         }
    
//         return `Dear ${username}, your tracking code is ${trackingCode}.`
//       } else {
//         return "Invalid input. Please make sure all fields are filled correctly."
//       }

   
//     }

// //  if (!username|| !age|| !courseofstudy|| !email ){
// //     return "All fields must be filled"
// //     }

    

// // alert(trackingResult)

function generateTrackingCode(course) {
  let randomNumber = Math.floor(Math.random() * 90000) + 10000
  return `SUN${randomNumber}`
}

function registerStudent() {
  // Get user input
  const username = prompt("Enter your username (at least 8 characters, no spaces):")
  const age = parseInt(prompt("Enter your age:"))
  const courseOfStudy = prompt("Enter your course of study (Engineering or Science):").toUpperCase()
  const email = prompt("Enter your email:")

  // Validate inputs
  if (
    username.length < 8 ||
    username.includes(" ") ||
    isNaN(age) ||
    age < 25 || age > 33 ||
    !email.includes("@") ||
    email.length < 8 ||
    !(courseOfStudy === "ENGINEERING" || courseOfStudy === "SCIENCE")
  ) {
    alert("Invalid input. Please check your information and try again.")
    return
  }

  // Generate tracking code
  const trackingCode = generateTrackingCode(courseOfStudy)

  // Display tracking code
  alert(`Dear ${username}, your tracking code is ${trackingCode}`)
}

// Register a student
registerStudent()

