// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const temperatures = [32, 35, 28, 40, 38, 30, 42];

//     1. filter() temperatures above 35
let temp=temperatures.filter(function(ele){
    return ele>35
})
console.log(temp)

//     2. map() to convert all temperatures from Celsius → Fahrenheit

let temp1=temperatures.map(function(ele){
    return ele*1.8+32
})
console.log(temp1)

//     3. reduce() to calculate average temperature
let temp3=temperatures.reduce(function(accumulator,ele){
    return accumulator+ele
},0)/temperatures.length
console.log(temp3)

//     4. find() first temperature above 40

let temp4=temperatures.find(function(ele){
    return ele>40
})
console.log(temp4)
//     5. findIndex() of temperature 28
let temp5=temperatures.findIndex(function(ele){
    return ele===28
})
console.log(temp5)
