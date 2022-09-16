const router = require('express').Router();
const Pouzivatel = require('../models/Pouzivatelia');


// Registrácia
router.get('/registracia', async (req, res) => {
    const pouzivatel = await new Pouzivatel({
        meno: 'Samuel',
        email: 'mericko.samuel@gmail.com',
        heslo: '12345'
    });

    await pouzivatel.save();
    res.send('ok');
});

module.exports = router;