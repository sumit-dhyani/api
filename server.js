const express=require('express')
const axios=require('axios').default
// const app=express()
const cors=require('cors')
const fastify = require('fastify')({ logger: true })
// app.use(cors())
const router=express.Router()
router.use(cors())
router.get('/',(req,res)=>{
    axios.get("https://fakestoreapi.com/products")
    .then(response=>{   
        res.json(response.data)
    })
    
})

const PORT=process.env.PORT||5500


// app.listen(PORT,function(){
//     console.log(`server is running at port : ${PORT}`)
// })


fastify.register(require('@fastify/express'))
  .after(() => {
    // fastify.use(express.urlencoded({extended: false})) // for Postman x-www-form-urlencoded
    // fastify.use(express.json())

    fastify.use(router)
    // 7599571929
  })

fastify.listen(PORT, console.log)