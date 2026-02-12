import exp from 'express'
export const userApp = exp.Router()
import { hash, compare } from "bcryptjs"
import { UserModel } from '../models/userModel.js'
import { ProductModel } from '../models/productModel.js'

userApp.post("/users", async (req, res) => {
    let userObj = req.body
    // get user from req
    await new UserModel(userObj).validate()
    let hashedPassword = await hash(userObj.password, 12)
    userObj.password = hashedPassword
    let UserObjDoc = new UserModel(userObj)
    UserObjDoc.save({ validateBeforeSave: false })
    res.status(201).json({ message: "new user added" })
})
// Add produ to users cart
userApp.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res) => {

    // read uid and pid from url parameters
    let { uid, pid } = req.params;  //paramsObj {uid:" ",pid:" "}

    // check user
    let user = await UserModel.findById(uid)
    if (!uid) {
        return res.status(401).json({ message: "User not found" })
    }
    // check product
    let product = await ProductModel.findById(pid)
    if (!product) {
        return res.status(401).json({ message: "Product not found" })
    }

    // check weather product already exists in user cart
    let isThere = await UserModel.findOne({_id:uid, "cart.product": pid })
    console.log(isThere)
    if (isThere === null) {
        let modifiedUser = await UserModel.findByIdAndUpdate(
            uid,
            { $push: { cart: { product: pid, quantity: 1 } } },
            { new: true }
        )
        return res.status(200).json({ message: "added to cart", payload: modifiedUser })
    }
    // const updatedUser = await UserModel.findOneAndUpdate(
    //     { _id: uid, "cart.product": pid },
    //     { $inc: { "cart.$.quantity": 1 } },
    //     { new: true }
    // );


    let returendObj=await UserModel.findOne({_id:uid, "cart.product": pid },{'cart.quantity':1,_id:0})
    let value=returendObj.cart[0].quantity
    value=Number(value)+1
    let modifiedUser = await UserModel.findOneAndUpdate(
        {_id:uid,"cart.product":pid},
        { $set: { cart: { product: pid,quantity:value } } },
        { new: true }
    )

    res.status(200).json({ message: "added to cart",payload:modifiedUser })

    // let modifiedUser = await UserModel.findByIdAndUpdate(
    //     uid,
    //     { $push: { cart: { product: pid } } },
    //     { new: true }
    // )

    
})

userApp.get("/users/:uid", async (req, res) => {
    let { uid } = req.params;
    console.log(uid)
    let users = await UserModel.findById(uid).populate("cart.product", "productName price")
    res.status(200).json({ message: "here are users", payload: users })
})
