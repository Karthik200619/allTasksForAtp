//  ===================================================================================================================================
// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"

//     1. filter() courses with name length > 5
const courses = ["javascript", "react", "node", "mongodb", "express"];

let ans=courses.filter(function(ele){
    return ele.length>5
})
console.log(ans)

//     2. map() to convert course names to uppercase
let ans2=courses.map(function(ele){
    return ele.toUpperCase()
})
console.log(ans2)

//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

let ans3=courses.reduce((acc,ele)=>acc.toUpperCase()+" | "+ele.toUpperCase())
console.log(ans3)

//     4. find() the course "react"
let ans4=courses.find((ele)=>ele==="react")
console.log(ans4)

//     5. findIndex() of "node"
let ans5=courses.findIndex((ele)=>ele==="node")
console.log(ans5)
