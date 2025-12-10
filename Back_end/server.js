const connectDB=require('../Back_end/Config/db')
const express=require('express')
const app=express
const PORT=5000
app.use(express.json())
connectDB()
app.listen(PORT,()=>{
    console.log(`server run in port ${PORT}`)
})