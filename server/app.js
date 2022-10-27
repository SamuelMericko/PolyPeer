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
const multer = require('multer');
const path = require('path');

// inicializácia aplikácie
const app = express();
dotenv.config();




// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// Ulozisko pre posty
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/assets");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("Súbor sa úspešne nahral");
  } catch (error) {
    console.error(error);
  }
});

app.use('/images', express.static(path.join(__dirname, "public/images/posts")));
app.use('/api/pouzivatelia', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);


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