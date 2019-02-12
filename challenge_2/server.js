const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './client')));

app.post('/', (req, res) => {
  console.log(JSON.parse(req.body.reqData));
  let obj = JSON.parse(req.body.reqData);

  // res.status(201).send('<form><input type="text"></form>');
})

app.listen(8008, () => {
  console.log('app is listening on port 8008');
})