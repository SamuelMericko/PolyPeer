const router = require('express').Router();
const Pouzivatel = require('../models/Pouzivatelia');
const bcrypt = require('bcrypt');

// Aktualizácia účtu
router.put('/:id', async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        if(req.body.heslo){
            try{
                const salt = await bcrypt.genSalt()
                req.body.heslo = await bcrypt.hash(req.body.heslo, salt);
            } catch(err) {
                return res.status(500).json(err);
            }
        }
        try {
            const pouzivatel = await Pouzivatel.findByIdAndUpdate(req.params.id, {$set: req.body});
            res.status(200).json('Účet bol aktualizovaný!')
        } catch(err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json('Aktualizovať môžete iba svoj vlastný účet!');
    }
});

// Odstránenie účtu
router.delete('/:id', async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await Pouzivatel.findByIdAndDelete(req.params.id);
            res.status(200).json('Účet bol odstránený!')
        } catch(err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json('Odstrániť môžete iba svoj vlastný účet!');
    }
});

// get one
router.get('/:id', async (req, res) => {
    try {
        const pouzivatel = await Pouzivatel.findById(req.params.id);
        res.status(200).json(pouzivatel);
    } catch(err) {
        return res.status(500).json(err);
    }
});

// follow

// unfollow

module.exports = router;