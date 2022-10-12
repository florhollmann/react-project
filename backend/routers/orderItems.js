const express = require('express');
const router = express.Router();
const {OrderItem} = require('../models/orderItem.js');

router.get(`/`, async (req, resp) => {
    const orderItemList = await OrderItem.find();
    if(!orderItemList)
    {
        resp.status(500).json({
            success: false
        })
    }
    resp.send(orderItemList);
})


router.post(`/`, (req, resp) => {
    const orderItem = new OrderItem({
        name : req.body.name,
        color: req.body.color,
        
    })
    if (resp.statusCode === 200) {
        orderItem.save().then((createdOrderItem) => {
            resp.status(201).json(createdOrderItem);
        }).catch((err) => {
            resp.status(500).json({
                Error : err,
                success: false
            })
        })
    }
})

//se exporta un modulo
module.exports = router;