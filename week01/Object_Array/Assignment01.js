// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"
const cart = [
      { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
      { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
      { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
      { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
    ];
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"
console.log("Task1")
let ans=cart.filter(function(ele){

    if(ele.inStock===true){
        return(
            {
                id:ele.id,
                name:ele.name,
                price:ele.price,
                quantity:ele.quantity,
                inStock:ele.inStock
            }
        )
        
    }
})
console.log(ans)
console.log("Task2")
//     2. Use map() to create a new array with:  { name, totalPrice }

let ans2=cart.map(function(ele){
    return({
        name:ele.name,
        totalPrice:ele.price
    })
})
console.log(ans2)
console.log("Task3")
//     3. Use reduce() to calculate grand total cart value

let ans3=cart.reduce((acc,ele)=>(acc+ele.price),0) 
console.log(ans3)
console.log("Task4")
//     4. Use find() to get details of "Mouse"

let ans4=cart.find((ele)=>ele.name==="Mouse")
console.log(ans4)
console.log("Task5")
//     5. Use findIndex() to find the position of "Keyboard"
let ans5=cart.findIndex((ele)=>ele.name==="Keyboard")
console.log(ans5)
