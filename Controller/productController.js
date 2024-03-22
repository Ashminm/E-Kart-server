const products=require('../Models/productModel')

exports.gellAllproductsController=async(req,res)=>{
    try{
        const result= await products.find()
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.gellProductsController=async(req,res)=>{
    try{
        const result=await products.findOne({id:req.params.id})
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)
    }
}