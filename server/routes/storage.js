const router = require('express').Router();
const multer = require('multer');

// Ulozisko pre posty
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/public/assets/posts");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
const upload = multer({ storage: storage });

router.post("/posts", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("Súbor sa úspešne nahral");
    } catch (error) {
      console.error(error);
    }
});

module.exports = router;