const mongoose = require('mongoose');
//const Category = require('./category'); 
// collection en mongodb es equivalente a model en nodejs y a schema en mongoose
//primero se crea el schrema que es el que se va a insertar en la collection
const userSchema = mongoose.Schema({
    id: String,
    name: String,
    email: String,
    paswordHash: String,
    street: String,
    apartment: String,
    city: String,
    zip: String,
    country: String,
    phone: Number,
    isAdmin: Boolean
})

exports.User = mongoose.model('User', userSchema);
