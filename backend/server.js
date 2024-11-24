const express=require('express')
const bookRoutes=require('./routes/BookRoutes')
// const mongoose=require('mongoose')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const cors=require('cors')


dotenv.config();
const app=express();
app.use(cors())
app.use(bodyParser.json())


const PORT=5000

app.use('/books',bookRoutes)

app.listen(PORT,()=>{
    console.log(`Server is Running on http://localhost:${PORT}`)
})


