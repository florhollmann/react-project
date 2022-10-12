const express = require('express');
const { Category } = require('../models/category');
const router = express.Router();
const {Product} = require('../models/product');

router.get(`/`, async (req, resp) => {
    const productList = await Product.find().select('name image -_id');
    if(!productList)
    {
        resp.status(500).json({
            success: false
        })
    }
    resp.send(productList);
})

router.get(`/:id`, async (req, resp) => {
    //populate: any id or field connected to another table will be displayed as detail
    const product = await Product.findById(req.params.id).populate('category');
    if(!product)
    {
        resp.status(500).json({
            success: false
        })
    }
    resp.send(product);
})


router.post(`/`,  async (req, resp) => {
    let category = await Category.findById(req.body.category);
    if (!category)
        return resp.status(400).json("invalid category sent")

    let product = new Product({
        name : req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
    })
    
    product = await product.save();
    if (!product)
        return resp.status(500).json("the product cannot be created")

    return resp.send(product);
})
//se exporta un modulo
module.exports = router;