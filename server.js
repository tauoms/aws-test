const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// use port 3000 unless there exists a preconfigured port
const port = process.env.PORT || 3000;

app.listen(port);