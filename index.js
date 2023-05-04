const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;



app.use(cors())

const allchefs = require('./data/allchefs.json');


app.get('/', (req,res) => {
    res.send("starting chef")
});

app.get('/allchefs', (req,res) => {
    res.send(allchefs)
})

app.listen(port, () => {
    console.log(`Chef API is running on port: ${port}`);
})