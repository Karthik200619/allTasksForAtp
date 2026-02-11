import exp from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { userRoute } from './APIs/userAPI.js'
import { adminRoute } from './APIs/adminAPI.js'
import { authorRoute } from './APIs/authorAPI.js'
import cookieParser from 'cookie-parser'
import { commonRouter } from './APIs/CommonAPI.js'
config()  //process.env


// create express application
const app = exp()

//add body parser middleware
app.use(exp.json())
//cookie parser middleWare
app.use(cookieParser())

//connect API's
app.use('/user-api',userRoute)
app.use('/admin-api',adminRoute)
app.use('/author-api',authorRoute)
app.use('/common-api',commonRouter)


//Database Connection
const connectDb = async () => {
    try {
        await connect(process.env.DB_URL)
        console.log("Connected to database")
        app.listen(process.env.PORT, () => console.log("server started"))
    }
    catch (err) {
        console.log("Error in database", err)
    }
}
connectDb()

//logout for User,Author and Admin
// app.post('/logout',(req,res)=>{
//     res.clearCookie('token',{
//         httpOnly:true, //Must Match original settings
//         secure:false,  //Must Match original settings
//         sameSite:"lax"  //Must Match original settings
//     })
//     res.status(200).json({message:"logout successfull"})
// })

//Invalid Path 
app.use((req,res,next)=>{
    res.json({message:`${req.url} Invalid Path`})
})


// error handling middle ware

app.use((err,req,res,next)=>{
    console.log("err:",err)
    res.json({message:"error",reason:err.message})

})
