//Loop is very important. It allows us to repeat code. There are multiple types of loop which include for loop,
//while loop, for..in loop, for..or loop

//For is a keyword for looping and can't be used as variable

//The format used is like this
// for(
//     [initialExpression]
//     [condition]
//     [incrementExpression], 
// )

for (let i = 1; i<= 10; i++) {
    console.log(i)
}

for(let number = 0; number<7; number++){
    console.log(number)
}

for(let j=50; j>=0; j-=10){
    console.log(j)
}

// for (let i=20; i>=0; i++){
//     console.log(i)
// }   Do not run this code! It is an infinite loop


const animals = ['lions', 'tigers', 'bears', 'chicken', 'squirrel', 'rabbit', 'fish']
for(let num=0; num<animals.length; num++){
    console.log(num, animals[num])
}

//Nested loops
let str = 'LOL';
for (let i = 0; i <= 4; i++){
    console.log('Outer:', i)
       for (let j = 0; j<str.length; j++){
        console.log('  Inner:', str[j]) ;
       }
}

const names = 'blaze'

for(let count = 0; count <5; count++) {
    console.log('Outercount', count)
       for(let chars = 0; chars < names.length; chars++){
        console.log(chars, names[chars])
       }
}

//While loops continue running as long as the test conition is true. Example
let num = 0;
while (num < 10) {
    console.log(num);
    num++;
}

// //or

// while(let num=0; num<10) {
//     console.log(num); num++;
// }

let targetnum = Math.floor(Math.random()*10);
let guess =  Math.floor(Math.random()*10);

while (guess !== targetnum) {
    console.log(`Guessed ${guess} ... Incorrect!`) ;
    guess =  Math.floor(Math.random()*10);
}

console.log(`Correct! Guessed: ${guess} & target was: ${targetnum}`)


let gues = 4
let target = 4

while (true){
    if (gues === target) {
        console.log('Correct guess', guess, target)
        break;
    }

    else if(gues !== target) {
        console.log('Inorrect guess', guess, target)
        break;
    }
}

//For ... of is a nice way of iteriating over arrays

let subreddits = ['soccer', 'popheads', 'toys', 'books']
for (let sub of subreddits) {
    //To do this for every item in subreddits array:
    console.log(`${sub} -www.reddit.com/r/${sub}`)
}

//function functionname(){do something}
//person is  a parameter, any variable you pass inside of a function
//parameter is like your variable while arguement is like the value

// function greet(person){
//    console.log(`Greetings ${person}`)
//    console.log(`${age} ${person}`)
// }

// greet('TImi', 6)

// greet('TImothy', 16)

// greet('Tide', 26)


// greet('Tiara', 60)

// function findLargest(x,y) {
//     if(x>y){
//         console.log(`${x} is larger!`);
//     }

//     else if (x<y) {
//         console.log(`${y}`)
//     }
// }


function findLargeSmallEqualNum(num1, num2) {
    if (num1 > num2){
        console.log(num1+ ''+' is the greater number')
    }

    else if(num2>num1) {
        console.log(num2 + '' + ' is the greater number')
    }

    else{
        console.log(num1 +'' + num2 + '' + 'are equal numbers')
    }
}

findLargeSmallEqualNum(64, 23)
findLargeSmallEqualNum(2, 23)
findLargeSmallEqualNum(23, 23)

let namee='James'
console.log(namee)

function namee1(){
    let namee = 'John'
    console.log(namee)
}

namee1()

function namee2(){
    let name = 'Johnny'
    console.log(namee)
}

namee2()

//lexical scope
function outer() {
    let hero = "Black Panther"

    function inner() {
        let cryForHelp = `${hero}, please save me!`
        console.log(cryForHelp)
    }

    inner()
}
   outer()


// const square = function sum(num){
//     return num*num
// }

// const result = square(7)
// console.log(result)

// const person = function personDetails(name){
//     return `This is ${name} and he has a score of ${result}`
// }

// const newperson = person ('Jonathan')
// console.log(newperson)




// const personname = function namee(nm){
//     return nm
// }

// const huy = personname('John')

// const personage = function age (ag){
//     return ag
// }

// const juy = personage(50)


// const resultt = thepersondetails () {
//     if (age >18){
//         console.log(`Hi ${namee}, you have been qualified since you are above 18`)
//      }
        
//     else if (age < 18){
//                  console.log(`Hi ${namee}, you don't meet the requirement`)
//              }
        
// }

// const 

function nameee(personname){
    return personname
}

let thename = nameee('David')

function age (personage){
    return personage
}

let theage = age(30)

function result(){
    if (theage > 18){
      return `Hello ${thename} your age is ${theage} you are qualified`
    }
    
    else if (theage < 18){
        return `Hello ${thename} your age is ${theage} you are not qualified`
      }
  

}

let resultt = result()
console.log(resultt)



























