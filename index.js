const express = require('express')
const app = express();

app.get("",(req,resp)=>{
   resp.send("<h1>This is nodemon js page</h1>")
});

app.get("/about",(req,resp)=>{
   resp.send("<h1>This is About page</h1>")
});

app.get("/contact",(req,resp)=>{
   resp.send("<h1>This is Contact page</h1>")
});


app.listen(3200)