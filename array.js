// let student1 = 'Adam' 
// let student2 = 'Alex'
// let student3 = 'Ann'

// //let students = ['Adam', 'Alex', 'Ann']
// //console.log (student [0])

// //types of array
// //empty array
// let cars =[]

// //array of strings
// let students = ['Laycon', 'Jegede', 'Nnamdi']

// //modifying array
// students [1] = 'Nneoma'
// console.log(students)


// //array of numbers
// let indices= [222,2223,20]


// //mixed array
// let spices = ['onga',null,true,34,undefined]
// console.log (spices[0])
// console.log (spices[1])
// console.log (spices[2])
// console.log (spices)

// //modifying array by changing the element
// spices [0] = 'knor'
// console.log (spices)

// //Push adds an element to the end of an array
// spices.push('chickenflavour, peppersoupflavour')
// console.log (spices)

// //pop removes the last element from the array
// spices.pop ()
// console.log(spices)

// //unshift adds to the start of the array
// spices.unshift('royco')
// console.log(spices)

// //shift removes the first element from an array..Doen't neccessarily need the variable, same as pop
// spices.shift()
// console.log(spices)

// //concat can merge arrays
// let computers = ['Bell', 'Hp']

// let newcomputers = ['Mac', 'Esus']

// let advcomputers = ['alien wave']

// let allComputers = computers.concat(newcomputers, advcomputers)

// console.log(allComputers)

// //includes method for searching
// let ans = allComputers.includes('lenovo')
// console.log(ans)

// //indexof
// let socialmedia = ['facebook', 'twitter', 'instagram']

// console.log(socialmedia.indexOf('whatsapp'))  //-1

// //join to bring out different elements as one word
// console.log(socialmedia.join(''))
// console.log(socialmedia.join('...'))

// //reverse
// console.log(socialmedia.reverse())

// //slice
// console.log(socialmedia.slice(1,2))  //twitter

// //splice
// console.log (socialmedia.splice(1,1, 'whatsapp'))
// console.log(socialmedia)

// //sort helps us to arrange an array

// const state = ['Tambia', 'Imo', 'Abia', 'Anambra', 'Benue'] //const references the container and not the stuffs inside

// state.push('Akwa Ibom')

// console.log (state.sort())

// console.log(typeof(state))

// // //nested array
// // const WDDRow = [
// //       ['Chidera']
// //       ['KC', 'Baba']
// //       ['Joe']
// // ]

// // console.log (WDDRow[1][0])

// Function to generate tracking code

function generateTrackingCode(username, age, course, email) {
    if (
      username.length >= 8 &&
      !username.includes(' ') &&
      age >= 25 && age <= 33 &&
      email.includes('@') && email.length >= 8
    )
    
    {
      let trackingCode = `SUN${Math.floor(Math.random() * 90000) + 10000}`;
      
      if (course.toLowerCase() === 'engineering') {
        trackingCode += 'ENG';
      } else if (course.toLowerCase() === 'science') {
        trackingCode += 'SCS';
      } else {
        return "Invalid course of study. Please choose either 'Engineering' or 'Science'."
      }
  
      return `Dear ${username}, your tracking code is ${trackingCode}.`
    } else {
      return "Invalid input. Please make sure all fields are filled correctly."
    }
  }
  
  // Example usage
  let username = prompt(("Enter your username")) 
  
  let age = Number (prompt ("Enter your age"))

  let course = prompt(("Enter your course"))
  let email = prompt(("Enter your email"))
  
  let trackingMessage = generateTrackingCode(username, age, course, email);
  alert(trackingMessage);
  