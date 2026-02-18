import express from 'express'
import path from 'path'
const app = express();

app.get("/",(res,resp)=>{
   const abs_path = path.resolve('view/home.html')  //absolute path h
   resp.sendFile(abs_path)
})

app.get("/login",(res,resp)=>{
   const abs_path = path.resolve('view/login.html')  //absolute path h
   resp.sendFile(abs_path)
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