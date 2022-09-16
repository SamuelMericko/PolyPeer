const router = require('express').Router();
const Pouzivatel = require('../models/Pouzivatelia');
const bcrypt = require('bcrypt');


// Registrácia
router.post('/registracia', async (req, res) => {
    try {
        // Vytvorenie hashovaného hesla
        const salt = await bcrypt.genSalt(10);
        const hashHeslo = await bcrypt.hash(req.body.heslo, salt);
            
        // Vytvorenie nového používateľa
        const novyPouzivatel = new Pouzivatel({
            meno: req.body.meno,
            email: req.body.email,
            heslo: hashHeslo
        });    
            
        const pouzivatel = await novyPouzivatel.save();
        res.status(200).json(pouzivatel);
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;