
import exp from 'express'
export const userApp=exp.Router()



let users=[]

// *****to execute for every incoming request**********
// userApp.use(middleWare)
// userApp.use(middleWare2)
// get all user
userApp.get("/users",(req,res)=>{
    // status is something like ResponseEntity
    res.status(200).json({message:"all usres",payload:users})
})

//*********** the data that we get is present in req.body ********************
userApp.post("/users",(req,res)=>{
    let newUser=req.body;
    users.push(newUser)
    res.status(201).json({message:"added to users"})
})

userApp.put("/users",(req,res)=>{
    // modify user from req
    let modifyUser=req.body
    // find user with Id exists in array
    let userIndex=users.findIndex(userObj=>userObj.id===modifyUser.id)
    if(userIndex===-1){
        return res.status(404).json({message:"User NOT FOUND"})
    }
    let deletedUser=users.splice(userIndex,1,modifyUser)
    res.status(200).json({message:"User Found"})
    
})
userApp.get('/users/:id',(req,res)=>{

    console.log(req.params)
    // if u send through a parameter then it is automatically getting converted to string but in RequestBody it does not happen
    let requestId=Number(req.params.id)
    let user=users.find(userObj=>userObj.id===requestId)
    if(user===undefined){
        return res.status(404).json({message:"user Not Found"})
    }
    res.status(200).json({message:"user Found",payload:user})
})

// delete By index
userApp.delete('/users/:id',(req,res)=>{
    // get the index value
    let requestId=Number(req.params.id)
    let userIndex=users.findIndex(userObj=>userObj.id===requestId)
    if(userIndex===-1){
        return res.status(404).json({message:"User Not Found"})
    }
    let deletedUser=users.splice(userIndex,1,)
    res.status(200).json({message:"user Found and deleted",payload:deletedUser})
    })