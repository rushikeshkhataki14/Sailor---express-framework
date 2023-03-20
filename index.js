let express = require("express");
let fs = require("fs");

let app = express();

app.use(express.static("public"));  

let header = fs.readFileSync("pages/header.html");
let footer = fs.readFileSync("pages/footer.html");

app.get("/" , (req,res)=>{
   res.end(header + fs.readFileSync("pages/index.html")+ footer);
});

app.get("/about" , (req,res)=>{
    res.end(header + fs.readFileSync("pages/about.html")+ footer);
})

app.get("/team" , (req,res)=>{
    res.end(header + fs.readFileSync("pages/team.html")+ footer);
})

app.get("/:anything" , (req,res)=>{
    res.end("page not found"); 
})

app.listen(8081, ()=>{
    console.log("Express website running on http://127.0.0.1:8081/");
})