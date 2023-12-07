// // let x=6
// // let y=50

// // console.log(x)
// // console.log("Hello world")

// let a = 50+90
// let b = 45-7
// let c = 34/4
// let d = 30%5
// let e = 45**2
// let f = (45%2)**4

// console. log(a)
// console. log(b)
// console. log(c)
// console. log(d)
// console. log(e)
// console. log(f)

// // let acc = 400
// // acc-50 
// // console .log(acc)
// // This does not change the value of acc

// // This is how to update a value using let
// let acc = 400
// acc = acc-50 
// acc = acc+50000

// acc = acc-20000
// acc -=20000
// // The two codes above are the same
// console.log(acc)

// const temp = 200
// console .log(temp)


// let g = 32928%2
// let h = 299876%2
// let i = 28565%2

// console .log(g)
// console .log(h)
// console .log(i)


// let rice = 55000
// rice = 55000 - (0.15 * 55000)
// let milk = 30000
// milk = 30000 - (0.15 * 30000)
// let shoes = 12000
// shoes = 12000 - (0.15 * 12000)
// let total = (rice + milk + shoes)

// console .log(total)


// let minutes = 34892
// let hours = 34892/60

// console .log(hours)


// Account = 700000
// Accountbalance = 700000 - 82450

// console .log(Accountbalance)


// SimpleInterest =(5000*5*4)/100
// console. log(SimpleInterest)


// Volume=(22/7)*300*300*100
// console. log(Volume)

// // How do you know data types
// let nun = 100
// console.log(typeof(nun))
// // Whatever you put type of will show what type whether number or string or boolean,etc. 

// // Strings: Strings are always indexed. The characters of a string starts from 0
// let username = "Zara"

// console.log(username[0])              //z

// console .log(username.indexOf(a))    //1

// let rr = username.toUpperCase()         //this is to change a string for lowercase to uppercase, vice versa for the opposite
// let rs = username.toLowerCase()

// console.log(rr)
// console.log(rs)

// let firstname = "emily"

// let initial = firstname[0].toUpperCase()
// console.log(initial)


// let lastname = "  Nonye   "
// console.log(lastname.trim())

// // //prompt
// // let userrname = prompt("Enter your usernmae")

// // console.log (userrname.trim())

// // If the value is not found on the string, it gives us -1
// let email = 'jajajagmail'

// console.log(email.indexOf('@'))    //-1


// //slice
// let fullname = "Nancy Oloma"
// let firsttname = fullname.slice(0, fullname.indexOf(" "))
// let lasttname = fullname.slice(fullname.lastIndexOf(" ") +1)

// // console.log (fullname.slice(0,7))
// // console. log(fullname.slice(0,4))

// console.log(firsttname)
// console.log(lasttname)


// let newuser= "Miss Bells"
// let nextuser = newuser.replace ("Bells", "Springs")

// console.log(nextuser)

// console.log( "I am \n a girl")

// console.log ( `I counted ${3+4} girls`)


// let item = `dress`
// let quantity = 5
// let price = 30

// console.log( `You bought ${quantity} ${item}, total price: ${quantity*price}`)


// //Math Object
// console.log(Math.PI)
// console.log(Math.round(3.999))
// console.log(Math.pow(2,5))
// console.log(Math.abs(-456))
// console.log(Math.floor(3.999))
// console.log(Math.random())


// //how to generate random number from 0-10

// console .log(Math.floor(Math.random()*10))

// console .log(Math.floor(Math.random()*10) +1 ) //This is to generate numbers from 1-10

console .log( Math. floor(Math.random()*100))

console .log(Math.floor(Math.random()*6))

console .log(Math.floor(Math.random()*6)+50)

console .log(Math.floor(Math.random()* (1500-1300+1)) +1300)

let fullName = 'Nancy Osimen'

let spaceIndex = fullName.indexOf(' ')
let firstName = fullName.slice(0, spaceIndex)
let firstNameInitial = firstName.charAt(0).toUpperCase() + '.'
let lastName = fullName.slice(spaceIndex + 1);

let result = firstNameInitial + ' ' + lastName;
console.log(result);

let user = 'michael'
let capitaluser = user.charAt(0).toUpperCase() + user.slice(1)
let numberOfShoes = 3
let shoePrice = 4000
let numberOfSandals = 5
let sandalPrice = 3200

console.log(`Hello ${capitaluser} your total amount is ${(numberOfShoes*shoePrice) + (numberOfSandals*sandalPrice)}`)

let username = 'henry charles'
let chicken = 1200
let salad = 200
let rice = 1000
let saladQty = 2
let riceQty = 3

//Finding the index of the last space in the username, i will say
let lastSpaceIndex = username.lastIndexOf(' ');

//Extracting the last name and capitalize the first letter, i will say
let lasttName = username.slice(lastSpaceIndex + 1);
let FinalName = lasttName.charAt(0).toUpperCase() + lasttName.slice(1);

console.log(`Hello, ${FinalName}  your total amount for your purchase is ${(salad*saladQty)+(rice*riceQty)+chicken}`);


let firstname  = 'Daniel'
let lastname = 'Ford'
let occupation = 'trader'
let age = 34
let city = 'Lagos'

console.log(`Profile: My name is ${firstname} ${lastname}, I am ${age} years old, i am a ${occupation} and i live in the city of ${city}`)


//boolean algebra
console.log( '22' == 22)
console.log( '22' === 22)
console.log ('4' != 4)
console.log( '4' !== 4)
console.log( 'Hello'.length)

console.log(true==false)
console.log(1==null)
console.log( ' '== '0')

if (5>3){}
