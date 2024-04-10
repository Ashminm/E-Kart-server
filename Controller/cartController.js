const carts = require('../Models/cartModel')

exports.addToCart=async(req,res)=>{
    try{
        const {id,title,price,image,quantity,category}=req.body
        const userId=req.payload
        const existingcartProduct=await carts.findOne({id,userId})
        if(existingcartProduct){
            existingcartProduct.quantity++
            existingcartProduct.totalPrice= existingcartProduct.quantity*existingcartProduct.price
            await existingcartProduct.save()
            res.status(200).json(existingcartProduct)
        }else{
            const newCart= new carts({
                id,title,price,image,quantity,totalPrice:price,category,userId
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

exports.incQuantity=async(req,res)=>{
    try{
        const cartId = req.params.id 
        const existingItem= await carts.findOne({_id:cartId})
        existingItem.quantity++
        existingItem.totalPrice= existingItem.price* existingItem.quantity
        await existingItem.save()
        res.status(200).json("Quantity Increased")
    }catch(err){
        res.status(401).json(err)
    }

}

exports.decQuantity=async(req,res)=>{
    try{
        const cartId = req.params.id 
        const existingItem= await carts.findOne({_id:cartId})
        existingItem.quantity--
       if(existingItem.quantity==0){
        const result = await carts.findOneAndDelete({_id:cartId}) 
        res.status(200).json("Item deleted by quantity 0")
       } else{
        existingItem.totalPrice= existingItem.price* existingItem.quantity
        await existingItem.save()
        res.status(200).json("Quantity Decreased")
       }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.emptyCart=async(req,res)=>{
    try{
        const userId = req.payload
        const result=await carts.deleteMany({userId})
        res.status(200).json(result+"Empty Cart")
    }catch(err){
        res.status(401).json(err)
    }

}