const mongoose = require('mongoose');
//const Category = require('./category'); 

// collection en mongodb es equivalente a model en nodejs y a schema en mongoose
//primero se crea el schrema que es el que se va a insertar en la collection
const productSchema = mongoose.Schema({
    id: String,
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    richDescription: {
        type: String,
        default: ''
    },
    image: [{
        type: String,
    }],
    brand: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    rating: {
        type: Number,
        default: 0
    },
    numReviews: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
})

exports.Product = mongoose.model('Product', productSchema);
