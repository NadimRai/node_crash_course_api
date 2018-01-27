const express = require('express');
const app = express();
const port = 3000;

const todoRoutes = require('./routes/todos');

app.get('/', (req,res) =>{
    res.json({message: 'Hello World'});
})

app.use('/api/todos', todoRoutes);

app.listen(port, () =>{
    console.log(`Running on ${port}`);
})




