const mongoose = require('mongoose');
const { OrderItem } = require('./orderItem');
const { User } = require('./user');

// collection en mongodb es equivalente a model en nodejs y a schema en mongoose
//primero se crea el schrema que es el que se va a insertar en la collection
const orderSchema = mongoose.Schema({
    id: String,
    //orderItem: OrderItem,
    shippingAddress1: String,
    shippingAddress2: String,
    city: String,
    zip: String,
    country: String,
    phone: Number,
    status: String,
    listPrice: Number,
    //user: User
    dateOrdered: Date,
})

exports.Order = mongoose.model('Order', orderSchema);