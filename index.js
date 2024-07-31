import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app=express();
const port=3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    
    res.render("index.ejs");
   
})

app.get("/search",(req,res)=>{
    res.render("search.ejs");
    
})

app.post("/search",async(req,res)=>{
    // const { body: { yk_search: abc} } = req;
    // const abc={name:req.body["yk_search"]};
    const abc=req.body["yk_search"];
    console.log(abc);
})