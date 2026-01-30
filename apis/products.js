import exp from 'express'
// sub Router
export const productApp=exp.Router()

// list of products
let products=[]

// get all products
productApp.get('/products',(req,res)=>{
    res.status(200).json({message:"all products",payload:products})
})

// add a product
productApp.post('/products',(req,res)=>{
    let productRequest=req.body
    products.push(productRequest)
    res.status(200).json({message:"added product"})
})


// get product by Id
productApp.get('/products-id/:id',(req,res)=>{
    let requestId=Number(req.params.id)
    let requestedObj=products.find(productObj=>productObj.productId===requestId)
    if(requestedObj===undefined){
        return res.status(404).json({message:"product Not Found"})
    }
    res.status(200).json({message:"product Found",payload:requestedObj})
})

// get product by brand name
productApp.get('/products-brand/:brand',(req,res)=>{
    let requestObjBrand=req.params.brand
    let requestedObj=products.find(productObj=>productObj.brand===requestObjBrand)
    if(requestObjBrand===undefined){
        return res.status(404).json({message:"user with name Not Found"})
    }
    res.status(200).json({message:"User with given name found",payload:requestedObj})
})

// update a product by id
productApp.put('/products/:id',(req,res)=>{
    let modifiedId=Number(req.params.id)
    let modifiedObj=req.body
    let neededIndex=products.findIndex(requiredObj=>requiredObj.productId===modifiedId)
    // check weather Id is presnt or not
    if(neededIndex===-1){ 
        // if not present return 404
        return res.status(404).json({message:"product Not Found"})
    }
    // if presnt make a copy of old product we used splice here that returns a array of changed objects 
    let oldMessage=products.splice(neededIndex,1,modifiedObj)
    // return success or OK or 200 status with our modified old object
    res.status(200).json({message:"product Found",payload:oldMessage})
})
// delete a user by id
productApp.delete('/products/:id',(req,res)=>{
    let deleteId=Number(req.params.id)
    let neededIndex=products.findIndex(requiredObj=>requiredObj.productId===deleteId)
    // check weather if id is presnt or not
    if(neededIndex===-1){
        // if not presnt return 404 status
        return res.status(404).json({message:"product Not Found"})
    }
    // if presnt delete that object using splice and store that deletedObject
    let deletedObj=products.splice(neededIndex,1,)
    // return that deteleted object in status 200
    res.status(200).json({message:"product deleted",payload:deletedObj})
})