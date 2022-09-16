const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Používateľský router')
});

module.exports = router;