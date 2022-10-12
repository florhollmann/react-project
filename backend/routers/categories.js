const { response } = require('express');
const express = require('express');
const router = express.Router();
const {Category} = require('../models/category');

router.get(`/`, async (req, resp) => {
    const categoryList = await Category.find();
    if(!categoryList)
    {
        resp.status(500).json({
            success: false
        })
    }
    resp.status(200).send(categoryList);
})

router.get(`/:id`, async (req, resp) => {
    const category = await Category.findById(req.params.id)
    if(!category)
    {
        resp.status(500).json({
            message: 'the category with given id not found',
            success: false
        })
    }
    resp.status(200).send(category);
})


router.put(`/:id`, async (req, resp) => {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            icon : req.body.icon,
            color : req.body.color,
        },
        { new: true }
        )
    if(!category)
        return resp.status(500).json({
            message: 'the category with given id not found',
            success: false
        })
    resp.status(200).send(category);    
})

router.post(`/`, async (req, resp) => {
    let category = new Category({
        name : req.body.name,
        icon: req.body.icon,
        color: req.body.color,
    })
    if (resp.statusCode === 200) {
        category.save().then((createdcat) => {
            resp.status(201).json(createdcat);
        }).catch((err) => {
            resp.status(error.response.status)
            
            return resp.send(error.message);
            })
        }
    //category = await category.save();
    //if (!category)
      //  return resp.status(404).send('the category cannot be created')
    //resp.send(category)
});

router.delete('/:id', async (req, resp) => {
    Category.findByIdAndRemove(req.params.id).then(deletedCat => {
        if(deletedCat)
            return resp.status(200).json({success: true, message: 'the category is deleted'})
        else
            return response.status(404).json({success: false, message: "category not found"})
    }).catch(err=>{
        return resp.status(400).json({success: false, error: err})
    });
});



//se exporta un modulo
module.exports = router;