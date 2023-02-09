const router = require('express').Router();
const { Todo } = require('../models');

router.get('/', (req,res) => {
    res.render("home")
})

router.post('/todo', async(req, res) => {
    try{
        const todoInfo = await Todo.create({
            todo: req.body.todoInput
    });
    console.log(todoInfo)


    res.status(200).json(todoInfo);
    } catch(err){
        res.status(500).json(err);
    };
})

router.get('/display', async(req, res) => {
    try{
        const fetchedData = await Todo.findAll();
        const serializedData = fetchedData.map((data) => data.get({ plain: true }));
        res.render('display', { serializedData });
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;