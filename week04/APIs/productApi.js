import exp from 'express'
import { ProductModel } from '../models/productModel.js'
export const productApp=exp.Router()

productApp.post("/products",async(req,res)=>{
    let productObj=req.body
    let ProductObjDoc=new ProductModel(productObj)
    await ProductObjDoc.save()
    res.status(201).json({message:"product added"})
})

productApp.get("/products",async(req,res)=>{
    let products=await ProductModel.find()
    res.status(200).json({message:"all products",payload:products})
})

