const express = require('express');
const app = express();
const port = 3000;

//app.get("/",(req, res) =>{
//  res.send("Hello, GET request!")
//} );

app.use(express.json());

app.post("/submit",(req, res) =>{
    const { name }= req.body;
    res.send(`hello, ${name}!`);
});
app.listen(port,()=>{
    console.log("server running at http://localhost:3000/");
});

app.get('/text',(req, res) =>{
    req.send('Ini adalah response text.');
});

app.get('/html', (req, res) =>{
    res.send('<h1>Ini adalah response HTML</h1>');
});

app.get('/json', (req, res) =>{
    res.json({ message: 'ini adalah respone JSON'});
});
