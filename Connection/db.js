const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

mongoose.connect(connectionString).then((res)=>{
    console.log("Ekart Successfully connected with Atlas.!!");
}).catch((err)=>{
    console.log(err);
})