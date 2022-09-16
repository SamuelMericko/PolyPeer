const router = require('express').Router();
const Pouzivatel = require('../models/Pouzivatelia');


// Registrácia
router.post('/registracia', async (req, res) => {
    const novyPouzivatel = new Pouzivatel({
        meno: req.body.meno,
        email: req.body.email,
        heslo: req.body.heslo
    });

    try {
        const pouzivatel = await novyPouzivatel.save();
        res.status(200).json(pouzivatel);
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;