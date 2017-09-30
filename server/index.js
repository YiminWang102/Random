const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const app = express();

app
  .use(morgan('dev'))
  .use(express.static(path.join(__dirname, '..')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('*', (req, res) =>
    res.sendFile(path.join(__dirname, '..', 'index.html')));

app.listen(PORT, () => {
  console.log('listening on port 8080');
});
