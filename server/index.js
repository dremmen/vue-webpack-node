const bookApi = require('./api/bookApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/book',bookApi);

app.listen(8000);
console.log('sucess listen at port: 8000......');



