import exp from 'express'
import {userApp} from "./apis/user.js"
import { productApp } from './apis/products.js';
const app=exp();

// start a port on 3000
app.listen(3000,()=>console.log("HTTP server on port 3000"))

// body passing middle ware
app.use(exp.json())

// users array


// // ******custom middle ware - 1
// function middleWare(req,res,next){
//     console.log("middle ware 1")
//     // it can even recive request
//     // res.json({message:"its able to send response "})
//     next()
// }


// // ******custom middle ware - 2
// function middleWare2(req,res,next){
//     console.log("middle ware 2")
//     // it can even recive request
//     // res.json({message:"its able to send response "})
//     // only called in post request
//     next()
// }

app.use('/user-api',userApp)
app.use('/product-api',productApp)



