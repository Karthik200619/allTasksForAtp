import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { UserTypeModel } from '../models/UserModel.js'

//register function
export const register = async (userObj)=>{
    //create document
    const userDoc=new UserTypeModel(userObj)
    //call validate method to check plain password
    await userDoc.validate()
    //if not a plain passwword hash the password
    userDoc.password=await bcrypt.hash(userDoc.password,10)
    //save
    const created=await userDoc.save()
    //convert the mongodb Document into js Object
    const newUserObj=created.toObject()
    //remove the password using delete
    delete newUserObj.password;
    //return the userObj
    return newUserObj;
}

export const authenticate= async({email,password})=>{
    //check email and role does exists
    const user=await UserTypeModel.findOne({email});
    if(!user){
        const err=new Error("Invalid email")
        err.statu(401)
        throw err;
    }
    //compare the password
    //to compare passwords 
    let isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        const err=new Error("Invalid password");
        err.status=401;
        throw err
    }
    //check isActive
    if(user.isActive===false){
        const err=new Error("Your account is blocked plzz contact admin")
        err.status=403;
        throw err;
    }
    //generate Token
    const token=jwt.sign({userId:user._id,email:user.email,role:user.role},process.env.SECRET_KEY,{expiresIn:"1h"})
    const userObj=user.toObject()
    delete userObj.password;
    return {token,user:userObj}
}
