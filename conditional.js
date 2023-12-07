// let password = '3434343434'
// //Use conditional statement to check the length of the password

// if(password.length<16){
// console.log('Password character must be greater than 16')
// }

// else{
// console.log('Good password')
// }

// console.log(password.length)

// // let email = 'jegbogu@gmail.com'

// // if (email.length>9) 


// //if your age is less than 20, your gate fee is 1000 and you will be assigned a password that starts with teen

// //if your age is more 60 you would be assigned a password that starts with ret and your fee will be 500

//  let fullname = prompt('Enter Fullname')
//  let age = Number(prompt('Enter age'))

//  let genPass = Math.floor(Math.random()*10000)+14300
//  let teenPassword =  `teen${genPass}`
//  let retPassword =  `ret${genPass}`

//  let firtsname = fullname.slice(fullname.indexOf(' '),100)
//  if(age<20){
//  alert(`Welcome ${firtsname}, your password is ${teenPassword} and your fee is 1000 Naira`)
//  }else if(age>60){
//  alert(`Welcome ${firtsname}, your password is ${retPassword} and your fee is 500 Naira`)
//  }else{
//      alert('You didnt meet the requirement')
//  }

//  //an application that can determine discount based on purchase
//  let fulllname = prompt('Enter fullname')
//  let firstPurchase = prompt('Enter product')

//  let firstamount;
//  if(firstPurchase.trim().toLowerCase() === 'noodles' && qty!=0){
//  firstamount = 2000*qty
//  }else if(firstPurchase.trim().toLowerCase() === 'hamper'){
//  firstamount = 3500
//  }

//  let noodlesQty =Number (prompt('noodlesQty'))

//  let hamperQty = Number(prompt('hamperQty'))
//  let shoesQty = Number(prompt('shoesQty'))
//  let chickenQty =Number (prompt('chickenQty'))
//  let noodles = 2000
//  let hamper = 3500
//  let shoes = 1700
//  let chicken = 2300


//  //create an application that would give 3% discount for a purchese of 5000 and above, and let the user know his total purchase, his discount percentage, and how much he has to pay
// //5% 10000 and above

// //the app must the firstname of the user and the qunatity he wants to purchase

//  if(totalPurchase>=5000){
//   alert(`Your total is :${totalPurchase},
//      nYour discount percentage is 3% and total amount to be paid with discount is\n
//   : ${totalPurchase - (totalPurchase*0.3)}./nThank you ${fullname.slice(0, fullname.indexOf(' '))}`)
//  }else if(totalPurchase>=10000){
//      alert(`Your total is :${totalPurchase},
//    nYour discount percentage is 5% and total amount to be paid with discount is\n
//  : ${totalPurchase - (totalPurchase*0.5)}./nThank you ${fullname.slice(0, fullname.indexOf(' '))}`)
//  }
 
//  //The and statement works only if both statements are either both true or both false. Example:

//  1 <=4 && 'a' === 'a' //true
//  9 > 10 && 9 >= 9 //false
//  'abc'.length === 3 && 1 + 1 === 4 //false

//  let passsword = 'taco tuesday'
//  if (passsword.length >= 6 && password.indexOf(' ') === -1) {
//       console.log("Valid Password!")
//  }  

//   else {
//     console.log ("Invalid Password")
//   }

//   //Or statement requires just one statement to be true!

//   1 !== 1 || 10 === 10 //true
//   10/2 === 5  || null //true
//   0 || undefined // false because both 0 and undefined are falsy values
  
//   //Note that !== means strictly not equal to and checks for data type and value
//   //While != means not equal too and only checks for value.

// let agee = 76

// if (agee < 6 || age >=65) {
//   console.log ('You get in for free!')
// }

// else {
//   console.log ( 'That will be $10 please')
// }

// //NOT expression ! returns true if expression is false

// !null //true

// ! (0 === 0) //false 

// !(3 <= 4) //false

//Note that (age = number then prompt) shows that the  the value type is a number and returns it as a number! This only applies for number 
//and boolean because by default it is a string.

let ageee = Number (prompt ("Enter your age"))

if (ageee >=24 && ageee <= 29){
  let studyfield = prompt ("Enter your field of study!")

  if (studyfield.toLowerCase().includes("engineering") || studyfield.toLowerCase() ==="computer science") {
    console.log ("You are assigned to field operations")
    alert("You are assigned to field operations")
  }
  else if (studyfield.toLowerCase() === "biochemistry" || studyfield.toLowerCase() === "biology" || studyfield.toLowerCase === " industrial chemistry") {
    console.log ("You are assigned to laboratory" )
    alert ("You are assigned to laboratory" )
  }
  else{
    console.log( "Sorry, your field of study is not eligible for this internship")
  }
}
 else{
  console.log( "Sorry, you are not in the eligible age range for this internship")
 }



 function determineServiceCharge(age) {
  if (age >=60) {
    return "Free Services"
  }
  else if (age >= 30 && age <=59) {
    return "Payment of 2000 naira"
  }
  else if ( age >= 18 && age <= 29) {
    return "Payment of 1200 naira"
  }
  else {
    return "Not permitted to enter"
  }
 }

 let userage = prompt ("Enter the user age")
 let servicecharge = determineServiceCharge(userage)
 console.log(servicecharge)

