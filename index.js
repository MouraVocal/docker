const express = require('express');

//To kill existing docker on port:
//docker rm -f <dockername>

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
