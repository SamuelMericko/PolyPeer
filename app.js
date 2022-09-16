// inicializácia knižníc
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');

// inicializácia aplikácie
const app = express();
dotenv.config();

app.listen(8800,() => {
    console.log('backend server beží');
});