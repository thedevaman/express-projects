import express from 'express'
import path from 'path'  // path is defined in same file
// import abs_path from './path.js';  // method to import abs_path from another file
const app = express();

 const abs_path = path.resolve('view') //absolute path h // path is defined in same file
const publicPath = path.resolve('public')

app.use(express.static(publicPath))

app.get("/",(res,resp)=>{
   resp.sendFile(abs_path+"/home.html")
})

app.get("/login",(res,resp)=>{
   resp.sendFile(abs_path+"/login.html")
})

app.use((res,resp)=>{
   resp.status(404).sendFile(abs_path+"/404page.html")
})


app.listen(3200)
// import express from 'express'; //ecmascript module syntax
// import home from './pages/home.js';
// import about from './pages/about.js';
// import contact from './pages/contact.js';
// import loginForm from './pages/loginForm.js';
// import submit from './pages/submit.js';
// // const express = require('express') //common js(vanilla) module syntax
// const app = express();
// // or
// // const express = require('express')();

// app.get("",(req,resp)=>{
//    resp.send(home())
// });

// app.get("/about",(req,resp)=>{
//    resp.send(about())
// });

// app.get("/contact",(req,resp)=>{
//    resp.send(contact())
// });

// app.get("/login",(req,resp)=>{
//    resp.send(loginForm())
// })

// app.post("/submit",(req,resp)=>{
//    resp.send(submit())
// })


// app.listen(3200)