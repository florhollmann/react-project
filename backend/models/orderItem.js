const mongoose = require('mongoose');
const { Product } = require('./product');

// collection en mongodb es equivalente a model en nodejs y a schema en mongoose
//primero se crea el schrema que es el que se va a insertar en la collection
const orderItemSchema = mongoose.Schema({
    id: String,
 //   product: Product,
    quantity: Number
})

exports.OrderItem = mongoose.model('OrderItem', orderItemSchema);