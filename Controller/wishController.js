const wishlists=require('../Models/wishModel')

exports.addToWishList=async(req,res)=>{
    const {id,title,price,description,category,image,rating}=req.body
    const userId=req.payload
    console.log("Add To Wish List");
    try{
        const existingProduct=await wishlists.findOne({userId,id})
        if(existingProduct){
            res.status(401).json("Product Already Exist in Wishlist.....!")
        }
        else{
            const newItem=new wishlists({
                id,title,price,description,category,image,rating,userId
            })
            newItem.save()
            res.status(201).json(newItem)
        }
    }catch(err){
        res.status(404).json(err)
    }
}

exports.getWishList= async(req,res)=>{
    try{
        const userId=req.payload
        const wishListProducts = await wishlists.find({userId})
        res.status(200).json(wishListProducts)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.removeFromWishListItem=async(req,res)=>{
    try{
        const wishId= req.params.id
        const wishListdelete=await wishlists.findOneAndDelete({_id:wishId})
        res.status(200).json(wishListdelete)

    }catch(err){
        res.status(401).json(err)
    }
}