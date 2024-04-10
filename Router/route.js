const express=require('express')
const productcontroller=require('../Controller/productController')
const usercontroller=require('../Controller/userController')
const wishListController=require('../Controller/wishController')
const cartController=require('../Controller/cartController')

const jwtMiddleware= require("../Middilewares/jwtMiddleware")

const router=new express.Router()

router.get('/all-products',productcontroller.gellAllproductsController)
router.get('/get-product/:id',productcontroller.gellProductsController)
router.post('/add-user',usercontroller.userRegisterController)
router.post('/login',usercontroller.userLoginController)
router.post('/add-wish',jwtMiddleware,wishListController.addToWishList)
router.get('/get-wish',jwtMiddleware,wishListController.getWishList)
router.delete('/delete-wishItem/:id',jwtMiddleware,wishListController.removeFromWishListItem)
router.post('/add-toCart',jwtMiddleware,cartController.addToCart)
router.get('/view-cartList',jwtMiddleware,cartController.viewCartList)
router.delete('/delete-cart-Item/:id',jwtMiddleware,cartController.deleteCartItem)
router.get('/incQuantity-cart-Item/:id',jwtMiddleware,cartController.incQuantity)
router.get('/decQuantity-cart-Item/:id',jwtMiddleware,cartController.decQuantity)
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCart)

module.exports=router