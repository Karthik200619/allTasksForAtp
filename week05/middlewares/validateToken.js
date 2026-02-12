import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()

export const verifyToken=async(req,res,next)=>{
    //get the token
    let token=req.cookies.token // cookies->{token:"2$5rwdajhdjabasdas"}
    console.log(token)
    //verify the validity of token
    if(token===undefined){
        return res.status(400).json({message:"Plz Login"})
    }
    //verify the validity of token(Decode the token)
    let decodeToken=jwt.verify(token,process.env.SECRET_KEY)
    //forward req to next middleware/route
    next();
}
