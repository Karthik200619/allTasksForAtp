import exp from 'express'
import { ArticleModel } from '../models/ArticleModel.js'
import { register,authenticate } from '../services/authService.js'
import { verifyToken } from '../middlewares/validateToken.js'
import { UserTypeModel } from '../models/UserModel.js'


export const userRoute = exp.Router()


// Register USER
userRoute.post('/users', async(req, res) => {
    //get the userObj
    let userObj = req.body
    //call the register
    //you should assign the role here
    const newUserObj=await register({...userObj,role:"USER"})
    //send response
    res.status(201).json({ message: "user registered successfully" })
})


// read all articles
userRoute.get('/articles/:userId',verifyToken,async(req,res)=>{
    //check he is a user or not
    // get all articles from ArticleModel
    let articles=await ArticleModel.find()
    res.status(200).json({message:"here are all articles",payload:articles})
})

// Add comment to an article
userRoute.put('/articles/:articleId/comments/users/:userId',verifyToken,async(req,res)=>{
    //get comment from body
    let {commentTxt}=req.body
    //get userId and artcileId
    let {userId,articleId}=req.params
    //check weather they both are vaild or not
    //get userObj from Db
    let userObjDb=await UserTypeModel.findById(userId)
    //get articleObj from Db
    let articleObjDb=await ArticleModel.findById(articleId)
    //check userObj is valid
    if(!userObjDb){
        return res.status(401).json({message:"user not found"})
    }
    //check articleObj is valid
    if(!articleObjDb){
        return res.status(401).json({message:"user not found"})
    }
    //if all vaild add comment by getting aryicleId and update
    let addedComment=await ArticleModel.findByIdAndUpdate(articleId,{$push:{comments:{user:userId,comment:commentTxt}}},{new:true})
    //return response
    res.status(200).json({message:"comment added successfully",payload:addedComment})
})
