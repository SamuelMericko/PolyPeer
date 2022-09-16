const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Autorizačný router')
});

module.exports = router;