const express = require('express');
const app = express();

const movies = require('./marvel.js');

app.use('/marvel', movies); 

 
app.listen(3000);
console.log(
    'HTTP Server up. Now go to http://localhost:3000 in your browser.'
  )