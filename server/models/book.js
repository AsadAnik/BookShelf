const mongoose = require('mongoose');

// bookSchema created..
const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: String,
        default: 'n/a'
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    review: {
        type: String,
        default: 'n/a'
    },
    pages: {
        type: String,
        default: 'n/a'
    },
    ownerId: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

// creating the model..
const Book = mongoose.model('Book', bookSchema);

module.exports = { Book };
