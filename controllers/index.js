const router = require('express').Router();
const { Todo } = require('../models');

router.get('/', (req,res) => {
    res.render("home")
})

router.post('/harvey', async(req, res) => {
    try{
        const todoInfo = await Todo.create({
            todo:req.body.fromFrontEnd
    });


    res.status(200).json(todoInfo);
    } catch(err){
        res.status(500).json(err);
    };
})

module.exports = router;