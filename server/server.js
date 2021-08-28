const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();

// Mongoose connect and promise...
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

// Import Models..
const { User } = require('./models/user');
const { Book } = require('./models/book');

// Middleware using..
app.use(bodyParser.json());
app.use(cookieParser());


// making routes...
// GET.
app.get('/api/getBook', function(req, res){
    let id = req.query.id;

    Book.findById(id, function(err, doc){
        if (err) return res.status(400).send(err);
        res.send(doc).status(200);
    });
});

app.get('/api/books', function(req, res){
    // for this -> ( http://localhost:8080/api/book?skip=[Number]&limit=[Number]&order=[asc||desc] ).
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    // inner sort's ORDER = asc || desc ..
    Book.find().skip(skip).sort({_id: order}).limit(limit).exec((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(doc);
    });

});

// POST.
app.post('/api/book', function(req, res){
    const book = new Book(req.body);

    book.save(function(err, doc){
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            bookId: doc._id
        });
    });
});

// UPDATE.
app.post('/api/book_update', function(req, res){
    // Update without Promise..
    // Book.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, doc) => {
    //     if (err) return res.status(400).send(err);
    //     res.status(200).json({
    //         success: true,
    //         doc
    //     });
    // });

    // Update with Promise..
    Book.findByIdAndUpdate(req.body._id, req.body, {new: true}).then(doc => {
        res.status(200).json({
            success: true,
            doc
        });
    }).catch(err => {
        res.status(400).send(err);
    });
});

// DELETE.
app.delete('/api/delete_book', function(req, res){
    let id = req.query.id;

    Book.findByIdAndDelete(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json(true);
    });
});


// make port server connect..
const PORT = process.env.PORT || 8080;
app.listen(PORT, function(){
    console.log(`SERVER IS RUNNING`);
});
