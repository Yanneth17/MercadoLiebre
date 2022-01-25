const express = require('express');
const path = require('path');
const app = express();

app.listen(3004, function() { 
    console.log("Hola, servidor funcionando")
});

app.get('/home', (req,res) =>{
    res.send("Levantando un servidor");
});

app.use(express.static(path.join(__dirname,'./public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
} )

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});