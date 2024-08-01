import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app=express();
const port=3000;

const API_URL="https://www.thecocktaildb.com/api/json/v1/1";

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
    const cocktail_name=req.body["yk_search"];
    // console.log(cocktail_name);


    // AXIOS
    // console.log(`${API_URL}/search.php?s=${cocktail_name}`);
    try{
        const response=await axios.get(`${API_URL}/search.php?s=${cocktail_name}`);
        const result=response.data;
        // console.log(result);
        res.render("search.ejs",{result:result});
        
      }catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: "No activities that match your criteria",
        });
      }

})

app.post("/recipe",async(req,res)=>{
    const id=req.body["drink_id"];
    // console.log(id);
    
    try{
        const response=await axios.get(`${API_URL}/lookup.php?i=${id}`);
        const result=response.data;
        // console.log(result);
        res.render("recipe.ejs",{result:result});
        
      }catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: "No activities that match your criteria",
        });
      }

})