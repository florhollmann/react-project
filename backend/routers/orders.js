const express = require('express');
const router = express.Router();
const {OrderItem} = require('../models/order.js');

router.get(`/`, async (req, resp) => {
    const orderList = await Order.find();
    if(!orderList)
    {
        resp.status(500).json({
            success: false
        })
    }
    resp.send(orderList);
})


router.post(`/`, (req, resp) => {
    const order = new Order({
        name : req.body.name,
        
    })
    if (resp.statusCode === 200) {
        order.save().then((createdOrder) => {
            resp.status(201).json(createdOrder);
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