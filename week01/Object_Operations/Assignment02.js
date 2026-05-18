// ==============================================================================================================================
// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
//     1. Calculate total marks

let totalMarks=0
for(let mark in marks){
    totalMarks+=marks[mark]
}
console.log(totalMarks)


//     2. Calculate average marks

let avgMarks=0
let len=0
for(let mark in marks){
    avgMarks+=marks[mark]
    len=len+1
}
console.log(avgMarks/len)

//     3. Find the highest scoring subject

let max=marks["maths"]
for(let mark in marks){
    if(marks[mark]>max){
        max=marks[mark]
    }
}
console.log(max)

//     4. Add a new subject computer: 90
marks.computer=90
console.log(marks)
