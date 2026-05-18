// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
//               const user = {
//                 id: 101,
//                 name: "Ravi",
//                 preferences: {
//                   theme: "dark",
//                   language: "en"
//                 }
//               };

// 🎯 Task
//     1. Create a shallow copy of user
//     2. Change:
//           i. name in the copied object
//           ii. preferences.theme in the copied object
//           iii .Log both original and copied objects
//           iv. Observe what changes and what doesn’t


const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};
let ShallowCopy={...user}
//           i. name in the copied object
ShallowCopy.name="karthik"

//           ii. preferences.theme in the copied object

ShallowCopy.preferences.theme="light"

//           iii .Log both original and copied objects
console.log(user)
console.log(ShallowCopy)
//           iv. Observe what changes and what doesn’t
// Sir the In shallow Copy by using spread Operator I observed that the copy Is created for and for premitives changes in copy does not effect the original
// but the changes made in inner object elements in copy object will effect the original one also because they are refering to same address in memory

