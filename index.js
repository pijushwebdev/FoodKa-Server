const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;



app.use(cors())

const allchefs = require('./data/allchefs.json');

const recipes = require('./data/recipes.json');



app.get('/', (req,res) => {
    res.send("starting chef")
});

app.get('/allchefs', (req,res) => {
    res.send(allchefs)
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})

app.listen(port, () => {
    console.log(`Chef API is running on port: ${port}`);
})