import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app=express();
const port=3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})