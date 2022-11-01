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
const storageRoute = require('./routes/storage');
const conversationRoute = require('./routes/conversations');
const messageRoute = require('./routes/messages');
const path = require('path');

// inicializácia aplikácie
const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/images', express.static(path.join(__dirname, "public/images/posts")));
app.use('/api/pouzivatelia', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/upload', storageRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);


app.get('/', (req, res, next) => {
    res.send('Hlavná testovacia stránka!');
})
  
// Error hanlder
app.use(errorRoute);

// Pripojenie k databáze
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    // Aplikácia
    app.listen(process.env.PORT,() => {
    console.log('Backend server beží');
    });
})
.catch((err) => {
    console.log(err)
})