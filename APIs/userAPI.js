import exp from 'express'
import { ArticleModel } from '../models/ArticleModel.js'
import { register,authenticate } from '../services/authService.js'
import { verifyToken } from '../middlewares/validateToken.js'
import { checkUser } from '../middlewares/checkUser.js'

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

// Autheticate user
// userRoute.post("/authenticate",async(req,res)=>{
    
// })



// read all articles
userRoute.get('/articles/:userId',verifyToken,checkUser,async(req,res)=>{
    //check he is a user or not
    // get all articles from ArticleModel
    let articles=await ArticleModel.find()
    res.status(200).json({message:"here are all articles",payload:articles})
})

// Add comment to an article
