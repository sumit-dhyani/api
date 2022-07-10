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




app.listen("3030",function(){
    console.log("server is running at port : 3030")
})