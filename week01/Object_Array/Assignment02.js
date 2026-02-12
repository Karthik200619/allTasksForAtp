// ======================================================================================================================================
// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//     1. filter() students who passed (marks ≥ 40)
console.log("Task1")
let pass=students.filter(function(ele){
    if(ele.marks>=40){
        return({
            id:ele.id,
            name:ele.name,
            marks:ele.marks
        })
    }
})
console.log("Task2")


//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

let pass2=students.map(function(ele){
    if(ele.marks>=90){
        return({
            id:ele.id,
            name:ele.name,
            marks:ele.marks,
            grade:"A"
        })
    }
    else if(ele.marks>=75){
        return({
            id:ele.id,
            name:ele.name,
            marks:ele.marks,
            grade:"B"
        })
    }
    else if(ele.marks>=60){
        return({
            id:ele.id,
            name:ele.name,
            marks:ele.marks,
            grade:"C"
        })
    }
    else{
        return({
            id:ele.id,
            name:ele.name,
            marks:ele.marks,
            grade:"D"
        })
    }
})
console.log(pass2)

//    3. reduce() to calculate average marks
console.log("Task3")
let pass3=students.reduce((acc,ele)=>acc+ele.marks,0)/students.length
console.log(pass3)
console.log("Task4")
//    4. find() the student who scored 92
let pass4=students.find((ele)=>ele.marks===92)
console.log(pass4)
console.log("Task5")
//    5. findIndex() of student "Kiran"
let pass5=students.findIndex((ele)=>ele.name==="Kiran")
console.log(pass5)
