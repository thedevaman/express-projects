import express from 'express'; //ecmascript module syntax
import home from './pages/home.js';
import about from './pages/about.js';
import contact from './pages/contact.js';
// const express = require('express') //common js(vanilla) module syntax
const app = express();
// or
// const express = require('express')();

app.get("",(req,resp)=>{
   resp.send(home())
});

app.get("/about",(req,resp)=>{
   resp.send(about())
});

app.get("/contact",(req,resp)=>{
   resp.send(contact())
});


app.listen(3200)