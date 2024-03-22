const express=require('express')
const productcontroller=require('../Controller/productController')

const router=new express.Router()

router.get('/all-products',productcontroller.gellAllproductsController)
router.get('/get-product/:id',productcontroller.gellProductsController)

module.exports=router