const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const pool = require('./modules/pool');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})