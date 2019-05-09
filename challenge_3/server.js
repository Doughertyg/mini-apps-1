const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
//need to serve html. Most likely serve static of the public folder. 
app.use(express.static('public'));

// app.get('/', (req, res) => { //success callback receives req and res. If get is on confirmation page, get db info

// }); //when the server receives a get what should it do? Likely need to use middleware
//app.post(); //when the server recieves a post what should it do?

