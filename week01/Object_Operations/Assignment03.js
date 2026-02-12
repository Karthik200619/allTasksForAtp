// ==============================================================================================================================
// Assignment 3: Application Settings Controller
// ---------------------------------------------
// Scenario : A web app stores user preferences as settings.

// Test data:
// const settings = {
//   theme: "light",
//   notifications: true,
//   autoSave: false,
//   language: "en"
// };


// Tasks :
//     1.Toggle theme between "light" and "dark"
//     2. Turn autoSave to true
//     3. Remove the notifications setting
//     4. Freeze the settings object so it cannot be modified


const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

//     1.Toggle theme between "light" and "dark"

settings.theme="dark"
console.log(settings)

//     2. Turn autoSave to true

settings.autoSave=true
console.log(settings)

//     3. Remove the notifications setting

delete settings.notifications
console.log(settings)

//     4. Freeze the settings object so it cannot be modified

Object.freeze(settings)
settings.autoSave=false
console.log(settings)
