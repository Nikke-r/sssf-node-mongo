'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
const catRoute = require('./routes/catRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/cats', catRoute);

db.on('connected', () => app.listen(3000));