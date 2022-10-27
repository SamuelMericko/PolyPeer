const router = require('express').Router();
const Post = require('../models/Post');
const Pouzivatelia = require("../models/Pouzivatelia");

// Vytvorenie postu
router.post('/',async (req, res) => {
    const novyPost = new Post(req.body);
    try {
        const ulozenyPost = await novyPost.save();
        res.status(200).json('Post bol vytvorený');
    } catch(err) {
        res.status(500).json(err);
    }
})

// Úprava postu
router.put('/:id', async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body});
            res.status(200).json('Post bol upravený');
        } else {
            res.status(403).json('Môžete upraviť len vlastný post');
        }
    }   catch(err) {
        res.status(500).json(err);
    }
});

//Vymazanie postu
router.delete('/:id', async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json('Post bol odstránený');
        } else {
            res.status(403).json('Môžete odstrániť len vlastný post');
        }
    }   catch(err) {
        res.status(500).json(err);
    }
});

// like post
router.put('/:id/like', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(!post.likes.includes(req.body.userId)) {
            await post.updateOne({$push: {likes: req.body.userId} });
            res.status(200).json('Post liked');
        } else {
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json('Post disliked');
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

// get post
router.get('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
});

// get timeline
router.get("/timeline/:userId", async (req, res) => {
    try {
      const currentUser = await Pouzivatelia.findById(req.params.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );
      res.status(200).json(userPosts.concat(...friendPosts))
    } catch (err) {
      res.status(500).json(err);
    }
});

// get user posts
router.get("/profile/:meno", async (req, res) => {
    try {
      const user = await Pouzivatelia.findOne({meno:req.params.meno});
      const posts = await Post.find({userId:user._id});
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
});
module.exports = router;