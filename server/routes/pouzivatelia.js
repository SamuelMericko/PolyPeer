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
router.get('/', async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId
            ? await Pouzivatel.findById(userId)
            : await Pouzivatel.findOne({meno: username});
        const {heslo, updatedAt, ...other} = user._doc;
        res.status(200).json(other);
    } catch(err) {
        return res.status(500).json(err);
    }
});

// Sledovanie
router.put('/:id/follow', async (req, res) => {
    if(req.body.userId !== req.params.id) {
        try {
            const pouzivatel = await Pouzivatel.findById(req.params.id);
            const sledovatel = await Pouzivatel.findById(req.body.userId);
            if(!pouzivatel.sledovatelia.includes(req.body.userId)) {
                await pouzivatel.updateOne({$push: {sledovatelia: req.body.userId} });
                await sledovatel.updateOne({$push: {sledovane: req.body.userId} });
                res.status(200).json('Sledujete nového používateľa!');
            } else {
                res.status(403).json('Tohto používateĺa už sledujete!');
            }
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Nemôžete sledovať sami seba!');
    }
});

// unfollow
router.put('/:id/unfollow', async (req, res) => {
    if(req.body.userId !== req.params.id) {
        try {
            const pouzivatel = await Pouzivatel.findById(req.params.id);
            const sledovatel = await Pouzivatel.findById(req.body.userId);
            if(pouzivatel.sledovatelia.includes(req.body.userId)) {
                await pouzivatel.updateOne({$pull: {sledovatelia: req.body.userId} });
                await sledovatel.updateOne({$pull: {sledovane: req.body.userId} });
                res.status(200).json('Prestali ste sledovať používateľa!');
            } else {
                res.status(403).json('Tohto používateĺa nesledujete!');
            }
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Nemôžete zrušit sledovanie sami sebe!');
    }
});
module.exports = router;