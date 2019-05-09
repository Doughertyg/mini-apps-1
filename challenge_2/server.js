const express = require('express');
const app = express();
const url = 'http://127.0.0.1';
const port = 3000;
const path = require('path');
const bodyparser = require('body-parser');

//app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post('/', (req, res) => {console.log(req.body);res.end()});
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/client/index.html')));

app.listen(port, () => (console.log('listening on port 3000!')));

