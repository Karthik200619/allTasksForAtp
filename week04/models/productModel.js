import {Schema,model} from 'mongoose'

const productSchema=new Schema({
    productName:{
        type:String,
        reuired:[true,"product name required"]
    },
    price:{
        type:Number,
        required:[true,"product price required"]
    },
    brand:{
        type:String,
        required:[true,"brand required"]
    }
},
{
    strict:true,
    timestamps:true,
    versionKey:false
})

export const ProductModel=model('product',productSchema);
