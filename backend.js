const express = require('express');
const app = express();

const name = process.env.NAME || 'Stakater';
const port = process.env.PORT || 80;

app.get('/', (req,res) =>{

    res.send(`Hello ${name}`);
});



app.listen(port, () => console.log(`Listening on port ${port}..`));