// ======================================================================================================================================

// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//     1. filter() employees from IT department
console.log("Task1")
let done=employees.filter(function(ele){
    if(ele.department==="IT"){
        return({
            id:ele.id,
            name:ele.name,
            salary:ele.salary,
            department:ele.department
        })
    }
})
console.log(done)
console.log("Task2")
//     2. map() to add:
//             netSalary = salary + 10% bonus

let done2=employees.map(function(ele){
    return({
        id:ele.id,
        name:ele.name,
        salary:ele.salary,
        department:ele.department,
        netSalary:ele.salary+ele.salary*10/100
    })
})

console.log(done2)
console.log("Task3")

//     3. reduce() to calculate total salary payout

let done3=employees.reduce((acc,ele)=>acc+ele.salary,0)
console.log(done3)
console.log("Task4")
//     4. find() employee with salary 30000

let done4=employees.find((ele)=>ele.salary===30000)
console.log(done4)
console.log("Task5")
//     5. findIndex() of employee "Neha"

let done5=employees.findIndex((ele)=>ele.name==="Neha")
console.log(done5)
