require('dotenv').config()
const express=require('express')
const cors=require('cors')


const Ekart=express()
Ekart.use(cors())
Ekart.use(express.json())
const router=require('./Router/route')
require('./Connection/db')
Ekart.use(router)

const PORT=3000 || process.env.PORT
Ekart.listen(PORT,()=>{
    console.log('Ekart Server started at:',PORT);
})

Ekart.get('/',(req,res)=>{
    res.send("<h1>Daily cart started...... Waiting for client request..!</h1>")
})