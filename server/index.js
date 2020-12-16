const parser = require('body-parser');
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const { router } = require('./routes/route');
const { uri } = require('./auth/credentials');

const app = express();

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('./client/dist'));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router);
