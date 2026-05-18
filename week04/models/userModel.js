import {Schema,model} from 'mongoose'
// create cart Schema
// const cartSchema=new Schema({
//     product:{
//         type:Schema.Types.ObjectId,
//         ref:'product' //name of product model
//     },
    
// })

const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product' //name of product model
    },
    quantity:{
        type:Number,
        required:[true]
    }
    
})
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"name required"]
    },
    email:{
        type:String,
        required:[true,"Email required"],
        unique:true //add to index
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    cart:{
        type:[cartSchema]
    }
})

export const UserModel=model('user',userSchema)
