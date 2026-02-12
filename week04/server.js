import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIs/userApi.js'
import { productApp } from './APIs/productApi.js'
const app = exp()

async function connectDb() {
    try {
        await connect('mongodb://localhost:27017/usersproduct')
        console.log("Connected to database ")
        app.listen(4000, () => {
            console.log("listening at port 4000")
        })
    }
    catch(err){
        console.log("cant connect to database due to",err)
    }
}

connectDb()

app.use(exp.json())

app.use('/user-api',userApp)

app.use('/product-api',productApp)

app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",reason:err.message})
})
