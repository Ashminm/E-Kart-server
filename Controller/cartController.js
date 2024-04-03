const carts = require('../Models/cartModel')

exports.addToCart=async(req,res)=>{
    try{
        const {id,title,price,image,quantity}=req.body
        const userId=req.payload
        const existingcartProduct=await carts.findOne({id,userId})
        if(existingcartProduct){
            existingcartProduct.quantity++
            existingcartProduct.totalPrice= existingcartProduct.quantity*existingcartProduct.price
            await existingcartProduct.save()
            res.status(200).json(existingcartProduct)
        }else{
            const newCart= new carts({
                id,title,price,image,quantity,totalPrice:price,userId
            })
            await newCart.save()
            res.status(200).json("Item added to cart!")
        }
    }
    catch(err){
        console.log(err);
        res.status(401).json(err)
    }
}

exports.viewCartList= async(req,res)=>{
    try{
        const userId=req.payload
        const cartViewList = await carts.find({userId})
        res.status(200).json(cartViewList)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.deleteCartItem=async(req,res)=>{
    try{
        const cartId = req.params.id
        const cartData =await carts.findOneAndDelete({_id:cartId})
        res.status(200).json(cartData)
    }
    catch(err){
        res.status(401).json(err)
    }
}