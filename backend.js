const express = require('express');
const app = express();

const name = process.env.NAME || 'Stakater';

app.get('/', (req,res) =>{

    res.send(`Hello ${name}`);
});



app.listen(3000, () => console.log('Listening on port 3000..'));