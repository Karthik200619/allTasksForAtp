import exp from 'express'
import { UserTypeModel } from '../models/UserModel.js'
import { verifyToken } from '../middlewares/validateToken.js'

export const adminRoute=exp.Router()

// Authenticate admin
// Read all articles
adminRoute.get('/articles',verifyToken,async(req,res)=>{
    //get all articles from ArticlesModel
    //return res
})

// Block 
adminRoute.post('/block/:userId',verifyToken,async(req,res)=>{
    //check weather user is does exists or not
    //if exists check weather he is already blocked or not
    //if not blocked make is isActive to false
    let userId=req.params.userId
    let userObjDb=await UserTypeModel.findById(userId);
    if(!userObjDb){
        return res.status(401).json({message:"user not found"})
    }
    //if he is found then check status
    if(userObjDb.isActive===false){
        return res.status(403).json({message:"user is already blocked"})
    }
    //block user and update user
    let blockedUser=await UserTypeModel.findByIdAndUpdate(userId,{$set:{isActive:false}})
    res.status(200).json({message:"User successfully Blocked",payload:blockedUser})
})

//UnblockUser
adminRoute.post('/unblock/:userId',verifyToken,async(req,res)=>{
    //check weather user is does exists or not
    //if exists check weather he is already unblocked or not
    //if not unblocked make is isActive to false
    let userId=req.params.userId
    let userObjDb=await UserTypeModel.findById(userId);
    if(!userObjDb){
        return res.status(401).json({message:"user not found"})
    }
    //if he is found then check status
    if(userObjDb.isActive===true){
        return res.status(403).json({message:"user is already unblocked"})
    }
    //unblock user and update user
    let unblockedUser=await UserTypeModel.findByIdAndUpdate(userId,{$set:{isActive:true}})
    res.status(200).json({message:"User successfully Blocked",payload:unblockedUser})
})
