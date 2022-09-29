// inicializácia knižníc
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Routre
const userRoute = require('./routes/pouzivatelia');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const errorRoute = require('./routes/errors');

// inicializácia aplikácie
const app = express();
dotenv.config();

// Pripojenie k databáze
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, () => {
    console.log('pripojený k MongoDB');
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/pouzivatelia', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);


app.get('/', (req, res, next) => {
    res.send('Hlavná testovacia stránka!');
})
  
// Error hanlder
app.use(errorRoute);

// Aplikácia
app.listen(process.env.PORT,() => {
    console.log('backend server beží');
});