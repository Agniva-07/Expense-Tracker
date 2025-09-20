const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require('./config/db');
const transactionRoutes=require('./routes/transactions');

const app=express();

dotenv.config(); //important line

app.use(express.json());
app.use(cors());

app.use('/api/v1/',transactionRoutes);

app.get("/",(req,res)=>{
    res.send("Server is running");
})

app.listen(process.env.PORT,()=>{
    connectDB();
    console.log(`server is running on port ${process.env.PORT}`);
})