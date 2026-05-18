// ======================================================================================================================================
// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
// const transactions = [
//   { id: 1, type: "credit", amount: 5000 },
//   { id: 2, type: "debit", amount: 2000 },
//   { id: 3, type: "credit", amount: 10000 },
//   { id: 4, type: "debit", amount: 3000 }
// ];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000

console.log(Task1)
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
//     1. filter() all credit transactions
console.log(Task1)

let res1=transactions.filter(function(ele){
    if(ele.type==="credit"){
        return{
            id:ele.id,
            type:ele.type,
            amount:ele.amount
        }
    }
})
console.log(res1)
//     2. map() to extract only transaction amounts
console.log(Task2)
let res2=transactions.map(function(ele){
    return{
        amount:ele.amount
    }
})
console.log(res2)

//     3. reduce() to calculate final account balance
console.log(Task3)

let res3=transactions.reduce((acc,ele)=>acc+ele,0)
console.log(res3)

//     4. find() the first debit transaction
console.log(Task4)

let res4=transactions.find((ele)=>ele.type==="debit")
console.log(res4)


//     5. findIndex() of transaction with amount 10000
console.log(Task5)

let res5=transactions.findIndex((ele)=>ele.amount===10000)
console.log(res5)
