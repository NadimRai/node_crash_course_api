const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) =>{
    res.json({message: 'Hello World'});
})

app.use('/api/todos', todoRoutes);

app.listen(port, () =>{
    console.log(`Running on ${port}`);
})




