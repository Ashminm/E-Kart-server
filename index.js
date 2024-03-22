require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('./Connection/db')
const router=require('./Router/route')

const Ekart=express()
Ekart.use(cors())
Ekart.use(express.json())
Ekart.use(router)

const PORT=3000 || process.env.PORT
Ekart.listen(PORT,()=>{
    console.log('Ekart Server started at:',PORT);
})

Ekart.get('/',(req,res)=>{
    res.send("<h1>Daily cart started...... Waiting for client request..!</h1>")
})