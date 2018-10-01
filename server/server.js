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
});

app.get('/messages', (req, res) => {
  console.log('/messages GET hit');
  pool.query(`SELECT * FROM "messages"`)
    .then((results) => {
      console.log('Back from GET messages with:', results.rows);
      res.send(results.rows);
    })
    .catch((error) => {
      console.log('Error getting messages');
      res.sendStatus(500);
    })
})