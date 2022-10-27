const router = require('express').Router();
const Pouzivatel = require('../models/Pouzivatelia');
const bcrypt = require('bcrypt');


// Registrácia
router.post('/register', async (req, res) => {
    try {
        // Vytvorenie hashovaného hesla
        const salt = await bcrypt.genSalt(10);
        const hashHeslo = await bcrypt.hash(req.body.heslo, salt);
            
        // Vytvorenie nového používateľa
        const novyPouzivatel = new Pouzivatel({
            meno: req.body.meno,
            priezvisko: req.body.priezvisko,
            email: req.body.email,
            heslo: hashHeslo
        });    
            
        const pouzivatel = await novyPouzivatel.save();
        res.status(200).json(pouzivatel);
    } catch(err) {
        res.status(500).json(err)
    }
});

// Prihlásenie
router.post('/login', async (req, res) => {
    try {
        // Email 
        const pouzivatel = await Pouzivatel.findOne({email:req.body.email});
        !pouzivatel && res.status(404).send('Používateľ sa nenašiel')

        // Heslo
        const spravneHeslo = await bcrypt.compare(req.body.heslo, pouzivatel.heslo);
        !spravneHeslo && res.status(400).json('Zlé heslo');

        res.status(200).json(pouzivatel);
    } catch(err) {
        res.status(500).json(err)
    }
});

module.exports = router;