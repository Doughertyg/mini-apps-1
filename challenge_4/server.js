const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.listen(port, () => console.log(`listening on port ${port}`));

app.use(express.static('client/compile/'));

// define get, post, update, delete responses etc

//define middleware to use, if any