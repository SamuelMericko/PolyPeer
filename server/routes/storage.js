const router = require('express').Router();
const multer = require('multer');

// Ulozisko pre posty
const postStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/public/assets/posts");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
const postUpload = multer({ storage: postStorage });

router.post("/posts", postUpload.single("file"), (req, res) => {
    try {
      return res.status(200).json("Súbor sa úspešne nahral");
    } catch (error) {
      console.error(error);
    }
});

// Ulozisko pre avatar
const avatarStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/assets/avatars");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const avatarUpload = multer({ storage: avatarStorage });

router.put("/avatars", avatarUpload.single("file"), (req, res) => {
  try {
    return res.status(200).json("Súbor sa úspešne nahral");
  } catch (error) {
    console.error(error);
  }
});


module.exports = router;