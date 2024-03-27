const jwt=require('jsonwebtoken')

const jwtMiddleWare=(req,res,next)=>{
    console.log("Inside jwtMiddleWare");
    try{
        const token=req.headers.authorization.split(" ")[1]
        // console.log(token);
        if(token){
            const result=jwt.verify(token,process.env.JWT_SECRETKEY)
            console.log(result);
            req.payload=result.userId
            // console.log(req.payload)
            next()
        }
        else{
            res.status(406).json("Token not Available")
        }
        
    }
    catch(err){
        res.status(401).json(err +"Authorization Failed!! Please Login...")
    }
}

module.exports=jwtMiddleWare