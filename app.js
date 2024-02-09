const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bikeRouter=require("./routers/bikeRouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://shamiltk02:shamiltk98@cluster0.7syqm.mongodb.net/vehicleDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/api/bike",bikeRouter)

app.listen(3001,()=>{
  console.log("server is running..")
})