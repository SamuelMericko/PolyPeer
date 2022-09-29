const router = require('express').Router();

router.use((req, res, next) => {
    res.status(404).send("<h1>404: Stránka sa nenašla</h1>")
});

router.use((req, res, next) => {
    res.status(500).send('<h1>Error</h1>');
});
  

module.exports = router;