const express=require('express')
const productcontroller=require('../Controller/productController')
const usercontroller=require('../Controller/userController')
const wishListController=require('../Controller/wishController')


const router=new express.Router()

router.get('/all-products',productcontroller.gellAllproductsController)
router.get('/get-product/:id',productcontroller.gellProductsController)
router.post('/add-user',usercontroller.userRegisterController)
router.post('/login',usercontroller.userLoginController)
router.post('/add-wish',wishListController.addToWishList)

module.exports=router