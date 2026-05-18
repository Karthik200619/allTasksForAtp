// ===========================================================================================================================
// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92
const marks = [78, 92, 35, 88, 40, 67];

//     1. filter() marks ≥ 40 (pass marks)

let pass=marks.filter((ele)=>ele>=40)
console.log(pass)

//     2. map() to add 5 grace marks to each student

let pass1=marks.map((ele)=>ele+5)
console.log(pass1)

//     3. reduce() to find highest mark

let pass3=marks.reduce((acc,ele)=>acc>ele?acc:ele)
console.log(pass3)

//     4. find() first mark below 40

let pass4=marks.find((ele)=>ele===40)
console.log(pass4)

//     5. findIndex() of mark 92

let pass5=marks.findIndex((ele)=>ele===92)
console.log(pass5)
