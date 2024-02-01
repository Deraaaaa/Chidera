

function myFunction2(){
    3*4
}


//Below is how to create an arrow function
const myFunction = () => {
    console.log (2*4)
}

myFunction()


//Mapping map is mostly used for looping over an array with so many ApIs

const arrays = [1,2,3,4,5,6,7]

arrays.map((i) =>{
    console.log(arrays)
}
)


for (let i =0; i<arrays.length; i++ ){
    console.log(arrays[i])
}

//Spread operator: How to spread an array
console.log (...arrays)