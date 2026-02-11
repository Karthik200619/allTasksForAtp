import exp from 'express'
export const commonRouter =exp.Router()
import { authenticate } from '../services/authService.js'
import jwt from 'jsonwebtoken'
import { UserTypeModel } from '../models/UserModel.js'


//login
commonRouter.post('/login',async(req,res)=>{
    let userCred=req.body
        //authenticate the user
        let {token,user}=await authenticate(userCred)
        res.cookie("token",token,{
            httpOnly:true,
            sameSite:"lax",
            secure:false
        })
        //send 
        res.status(200).json({message:"login Successfull",payload:user})
})


//logout
// commonRouter.get('/')
commonRouter.get('/logout',(req,res)=>{
    res.clearCookie('token',{
        httpOnly:true, //Must Match original settings
        secure:false,  //Must Match original settings
        sameSite:"lax"  //Must Match original settings
    })
    res.status(200).json({message:"logout successfull"})
})


//Change Password
commonRouter.put('/change-password',async(req,res)=>{
    //get current password and new password
    let {email,currentPassword,newPassword}=req.body
    //check current password is correct or not
    UserTypeModel.findOne({email:email})
    jwt.verify(currentPassword,)
})