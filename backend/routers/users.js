const express = require('express');
const router = express.Router();
const {User} = require('../models/user');

router.get(`/`, async (req, resp) => {
    const userList = await User.find();
    if(!userList)
    {
        resp.status(500).json({
            success: false
        })
    }
    resp.send(userList);
})

router.post(`/`, (req, resp) => {
    const user = new User({
        name : req.body.name,
    })
    if (resp.statusCode === 200) {
        product.save().then((createdUser) => {
            resp.status(201).json(createdUser);
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