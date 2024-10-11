console.log(`hello`)

// Create a prompt asking the user to input numbers separated by commas

const data = prompt(`input numbers separated by commas`, `2,14,25,13,18,3,7,4`)
//Turn the user's input into an array

const numArray = data.split(`,`)
console.log(data)

// Convert the strings in the array into numbers
// use for loop to do this
const numNums = []

for (let index = 0; index < numArray.length; index++) {
  const numNum = Number(numArray[index]);
  numNums.push(numNum);
  
}
console.log()
console.log(numNums)


// Create the following functions and their returns. Each function will be passed in the array of numbers created in step 3.
// 1.

const getLength = () => {
  return(console.log(`numNums.length`))
}
// 2.

let numSum = 0
const getSum = () => {
  for (let index = 0; index < numNums.length; index++) {
    let numNum = Number(numArray[index]);
    numSum += numNum

  }
return(console.log(`sum is ${numSum}`))
}
getSum();

// 3.
let numAvg = 0
let sum = 0
const getAvg = () => {
  for (let index = 0; index < numNums.length; index++) {
    let numNum = Number(numArray[index]);
    sum += numNum
    numAvg = sum / numNums.length

  }
return(console.log(`The average is ${numAvg}`))
}
getAvg();

//  4.
let minNum = 10^5
const getMin = () =>{
  for (let index = 0; index < Number(numNums.length); index++) {
    const numVal = numNums[index];
    if(minNum > numVal) {
      minNum = numVal
    }
    
  }
return(console.log(`The minimum is ${minNum}`))
}
getMin();

//  5.
let maxNum = 0
const getMax = () =>{
  for (let index = 0; index < Number(numNums.length); index++) {
    const numVal = numNums[index];
    if(maxNum < numVal) {
      maxNum = numVal
    }
    
  }
return(console.log(`The maximum is ${maxNum}`))
}
getMax();

//  6.
let range = 0

const getRange = () =>{
  range = (maxNum - minNum)
  return(console.log(`the range is ${range}`) )
}
getRange();

//  7.
let evens = []
const getEvens = () => {
  for (let index = 0; index < numNums.length; index++) {
    const numVal = numNums[index];
    if (numVal % 2 < 1) {
      evens.push(numVal);
    }
  }
return(console.log(`The evans are ${evens}`))
}
getEvens();

//  8. 
let odds = []
const getOdds =() => {
  for (let index = 0; index < numNums.length; index++) {
    const numVal = numNums[index];
    if (numVal % 2 > 0) {
      odds.push(numVal);
    }
  return(console.log(`The odds are ${odds}`))
    
  }
}
getOdds();