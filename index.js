import express from 'express';
import { Book } from './models/user.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json())

mongoose.connect("mongodb://localhost:27017",{
  dbName:"book_store"
}).then(()=>console.log("db connected"))
.catch((e)=>console.log(e))

app.get("/",(req,res)=>{
    res.json({
        success:true,
        users:[]
    })
})



app.post("/books", async (req, res) => {
    const { title, author, publishYear } = req.body; // Extracting title, author, and publishYear from the request body

    // Creating a new book entry using the extracted data
    await Book.create({
        title,
        author,
        publishYear
    });

    // Sending a JSON response indicating success
    res.json({
        success: true,
        msg: "registered"
    });
});


app.listen(4000,()=>{
    console.log("server is running");
})