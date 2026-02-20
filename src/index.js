const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3000;
const users = [];

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('HELLO!')
});

app.get('/users', (req,res)=>{
    return res.json(users);
});

app.post('/users', (req,res)=>{
    const newId = req.body.userId;
    if (!newId) {
        return res.status(400).send('Missing userId.');
    }

    if (users.includes(newId)){
        return res.status(400).send('userId already exists.');
    }

    users.push(newId);
    return res.status(201).send('user regstered.');
});



app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});