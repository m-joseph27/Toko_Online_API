require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT;
const route = require('./src/router/index.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/', route);
app.listen(port, () => {
  console.log(`App Listen on ${port}`);
})