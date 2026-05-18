// ======================================================================================================================================
// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
// const movies = [
//   { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
//   { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
//   { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
//   { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
// ];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"

//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
//     1. filter() only "Sci-Fi" movies

console.log("Task 1")

let answ=movies.filter(function(ele){
    if(ele.genre==="Sci-Fi"){
        return({
            id:ele.id,
            title:ele.title,
            genre:ele.genre,
            rating:ele.rating
        })
    }
})
console.log(answ)

//     2. map() to return:
//             "Inception (8.8)"

console.log("Task 2")

let answ1=movies.map(function(ele){
    if(ele.rating===8.8){
        return({
            id:ele.id,
            title:ele.title,
            genre:ele.genre,
            rating:ele.rating
        })
    }
})
console.log(answ1)



//     3. reduce() to find average movie rating
console.log("Task 3")

let answ3=movies.reduce((acc,ele)=>acc+ele,0)/movies.length
console.log(answ3)



//     4. find() movie "Joker"
console.log("Task 4")

let answ4=movies.find((ele)=>ele.title==="Joker")
console.log(answ4)

//     5. findIndex() of "Avengers"
console.log("Task 5")

let answ5=movies.findIndex((ele)=>ele.title==="Avengers")
console.log(answ5)
