const express=require('express')
const axios=require('axios').default
const app=express()
const cors=require('cors')
app.use(cors())

app.get('/',(req,res)=>{
    axios.get("https://fakestoreapi.com/products")
    .then(response=>{   
        res.json(response.data)
    })
    
})

PORT=process.env.PORT||5500


app.listen(PORT,function(){
    console.log(`server is running at port : ${PORT}`)
})