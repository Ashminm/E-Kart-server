const wishlists=require('../Models/wishModel')

exports.addToWishList=async(req,res)=>{
    const {id,title,price,description,catagory,image,rating}=req.body
    const userId=req.payload
    try{
        const existingProduct=wishlists.findOne({userId,id})
        if(existingProduct){
            res.status(401).json("Product Already Exist in Wishlist.....!")
        }
        else{
            const newItem=new wishlists({
                id,title,price,description,catagory,image,rating
            })
            newItem.save()
            res.status(201).json(newItem)
        }
    }catch(err){
        res.status(404).json(err)
    }
}