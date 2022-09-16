// inicializácia knižníc
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Routre
const userRoute = require('./routes/pouzivatelia');
const authRoute = require('./routes/auth');

// inicializácia aplikácie
const app = express();
dotenv.config();

// Pripojenie k databáze
mongoose.connect(process.env.MONHO_URL, {useNewUrlParser: true}, () => {
    console.log('pripojený k MongoDB');
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/pouzivatelia', userRoute);
app.use('/api/auth', authRoute);

// Aplikácia
app.listen(8800,() => {
    console.log('backend server beží');
});