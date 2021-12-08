const express = require('express');
const router = express.Router();

const Posts = require('../models/Posts');

router.get('/', async (req, res) => {
   res.json(await Posts.find());
});

router.post('/', async (req, res) => {
   const posts = new Posts(req.body);
   await posts.save();
   res.json({state: 'success'});
});

router.get('/:id', async (req, res) => {
   res.json(await Posts.findById(req.params.id));
});

router.get("/head/:headline", async (req, res) => {
    //res.json("headline: " + req.params["headline"])
    res.json(await Posts.findOne({headline: req.params["headline"]})).exec()
    

 });

router.put('/:id', async (req, res) => {
   await Posts.findByIdAndUpdate(req.params.id, req.body);
   res.json({state: 'updated'});
});

router.delete('/:id', async (req, res) => {
   await Posts.findByIdAndRemove(req.params.id);
   res.json({state: 'deleted'});
}); 

module.exports = router;