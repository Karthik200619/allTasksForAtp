import exp from 'express'
import { ArticleModel } from '../models/ArticleModel.js'
import { register } from '../services/authService.js'
import { checkAuthor } from '../middlewares/checkAuthor.js'
import { verifyToken } from '../middlewares/validateToken.js'



export const authorRoute = exp.Router()

// Register Author
authorRoute.post('/users', async(req, res) => {
    //get the userObj
    let authorObj = req.body
    //call the register
    //you should assign the role here
    const newAuthorObj=await register({...authorObj,role:"AUTHOR"})
    //send response
    res.status(201).json({ message: "author registered successfully",payload:newAuthorObj })
})

// Autheticate author
// authorRoute.post("/authenticate",async(req,res)=>{
//     let authorCred=req.body
//     //authenticate the author
//     let {token,user}=await authenticate(authorCred)
//     res.cookie("token",token,{
//         httpOnly:true,
//         sameSite:"lax",
//         secure:false
//     })
//     res.status(200).json({message:"login Successfull",payload:user})
// })

//Create article
authorRoute.post('/articles',verifyToken,checkAuthor,async(req,res)=>{
    //get the article
    let articleObj=req.body
    // check if author exists or Not
    // let authorObjDb=await UserTypeModel.findById(articleObj.author)
    // if(!authorObjDb || authorObjDb.role!=="AUTHOR"){
    //     return res.status(401).json({message:"authorId is not valid"})
    // }
    //create article Documnet
    let articleDoc=new ArticleModel(articleObj)
    //save that 
    let createdArticleDoc=await articleDoc.save()
    // send Response
    res.status(200).json({message:"Article published Successfully",payload:createdArticleDoc})

})

//Read articles of author
authorRoute.get('/articles/:authorId',verifyToken,checkAuthor,async(req,res)=>{
    let authorId=req.params.authorId
    //check if author exsists or not
    // let authorObjDb=await UserTypeModel.findById(authorId)
    // if(!authorObjDb || authorObjDb.role!=="AUTHOR"){
    //     return res.status(401).json({message:"authorId is not valid"})
    // }
    // get all articles of that author which is active
    let articles=await ArticleModel.find({author:authorId,isArticleActive:true}).populate("author","firstName")
    res.status(200).json({message:"Here are the Articles",payload:articles})
})


//edit an article
authorRoute.put('/articles',verifyToken,checkAuthor,async(req,res)=>{
    //get modified article from req
    let {articleId,content,title,category,author}=req.body
    //find article
    let articleOfDb=await ArticleModel.findOne({_id:articleId,author:author})
    if(!articleOfDb){
        return res.status(401).json({message:"Article Not found"})
    }
    //update the article
    let updatedArticle=await ArticleModel.findByIdAndUpdate(articleId,{$set:{content,title,category}},{new:true})
    //send Response
    res.status(200).json({message:"modified Article",payload:updatedArticle})
})

//DELETE article 
authorRoute.delete('/articles/:authorId/:articleId',verifyToken,checkAuthor,async(req,res)=>{
    //check if article exsists by authorId and articleId
    let authorId=req.params.authorId
    let articleId=req.params.articleId
    //check if article exsists
    let articleOfDB=await ArticleModel.findOne({author:authorId,_id:articleId})
    if(!articleOfDB){
        return res.status(401).json({message:"Article Not found"})
    }
    //update isActive to false and upate document
    let softCopy=await ArticleModel.findByIdAndUpdate(articleId,{$set:{isArticleActive:false}},{new:true})
    //send Response
    res.status(200).json({message:" disabled article ",payload:softCopy})

})

//cookies are attached while sending request
