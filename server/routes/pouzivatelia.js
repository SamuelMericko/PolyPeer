const router = require('express').Router();
const Pouzivatel = require('../models/Pouzivatelia');
const bcrypt = require('bcrypt');
const Pouzivatelia = require('../models/Pouzivatelia');

// Aktualizácia profilu
router.put('/:id', async (req, res) => {
        try {
            await Pouzivatel.findByIdAndUpdate(req.params.id, {$set: req.body});
            res.status(200).json('Účet bol aktualizovaný!')
        } catch(err) {
            return res.status(500).json(err);
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

//get followers
router.get("/friends/:userId", async (req, res) => {
    try {
        const user = await Pouzivatelia.findById(req.params.userId);
        const friends = await Promise.all(
            user.followers.map(friendId => {
                return Pouzivatel.findById(friendId)
            })
        );
        let friendList = [];
        friends.map(friend => {
            const {_id, meno, profilovka} = friend;
            friendList.push({_id, meno, profilovka});
        });
        res.status(200).json(friendList);
    } catch(err) {
        res.status(500).json(err);
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

//get all
router.get('/allusers', async (req,res) =>{ 
    try {
        const users = await Pouzivatelia.find({}).sort({createdAt: -1});

        res.status(200).json(users);
    } catch(err) {
        res.status(500).json(err)
    }
});

// Sledovanie
router.put('/:id/follow', async (req, res) => {
    if(req.body.userId !== req.params.id) {
        try {
            const user = await Pouzivatel.findById(req.params.id);
            const currentUser = await Pouzivatel.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)) {
                await user.updateOne({$push: {followers: req.body.userId} });
                await currentUser.updateOne({$push: {followings: req.params.id} });
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
            const user = await Pouzivatel.findById(req.params.id);
            const currentUser = await Pouzivatel.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)) {
                await user.updateOne({$pull: {followers: req.body.userId} });
                await currentUser.updateOne({$pull: {followings: req.params.id} });
                res.status(200).json('Prestali ste sledovať použivateľa!');
            } else {
                res.status(403).json('Tohoto používateľa už nesledujete!');
            }
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Nemôžete zrušit sledovanie sami sebe!');
    }
});

//get profilovka
router.get('/profilovka/:id', async (req, res) => {
    try {
        const user = await Pouzivatel.findById(req.params.id);
        res.status(200).json(user);
    } catch(err) {
        return res.status(500).json(err);
    }
});

module.exports = router;