//object is a collection of data or properties. Properties are a key value pair. Rather than accessing data using 
// an index, we use custom keys.

const names = {
    firstperson: 'Daniel',
    secondperson: 'Chidera',
    thirdperson: 'Tobe',
    fourthperson: '2 Pack',
    fifthperson: 'Kelechi',
    lastperson: 'Joseph'
}

console.log(names.firstperson)

const humans = {
   males: ['Obi', 'John', 'Tobe'],
   females: ['Ada', 'Gift', 'Chidera'],
   boy: 'blaik',
   girl: 'Nene', 
   women: {mum: 'Tobe mummy', Joe:'Joe Sister', blaik: [true, 'grace', {animal: 'goat'}  ]  }
}


//To get Gift
console.log(humans.females[1])

//To get Tobe
console.log(humans.males[2])

//To get blaik
console.log(humans.boy)
console.log(humans['boy'])

 //To get Tobe Mummy
console.log(humans.women.mum) 

 //To get goat
console.log(humans.women.blaik[2].animal) 

//To change the value grace to great
console.log(humans.women.blaik[1] = 'great')

//To add another array in the women value
console.log(humans.women.Emma = [1, 2, 3, 4]) 
console.log(humans.women)


// const shoppingcart = [
//     {
//         product: 'Jenga Classic',
//         price: 6.88,
//         quantity: 1,
//     },

//     {
//         product: 'Echo bread',
//         price: 10,
//         quantity: 2
//     },

//     {
//         product: 'Fire biscuit',
//         price: 30,
//         quantity: 3
//     }
// ]
let shoppingcart =  {
    product: 'Fire bicuit',
    price: 30,
    quantity: 3
}

const student = {
    firstname: 'David',
    lastname: 'James',
    strengths: ['Music', 'Art'], exams: {midterm: 92, final:88 }
}

console.log(student.shopping=shoppingcart)
console.log(student)



