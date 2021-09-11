const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();

// Mongoose connect and promise...
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Import Models..
const { User } = require('./models/user');
const { Book } = require('./models/book');

// Import Middleware..
const { auth } = require('./middleware/auth');

// Middleware using..
app.use(bodyParser.json());
app.use(cookieParser());


// making routes...
// GET.
// show_specific_book..
app.get('/api/getBook', function(req, res){
    let id = req.query.id;

    Book.findById(id, function(err, doc){
        if (err) return res.status(400).send(err);
        res.send(doc).status(200);
    });
});

// show_books..
app.get('/api/books', function(req, res){
    // for this -> ( http://localhost:8080/api/book?skip=[Number]&limit=[Number]&order=[asc||desc] ).
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    // inner sort's ORDER = asc || desc ..
    Book.find().skip(skip).sort({_id: order}).limit(limit).exec((err, docs) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(docs);
    });

});

// logout..
app.get('/api/logout', auth, function(req, res){
    req.user.deleteToken(req.token, function(err, user){
        if (err) return res.status(400).send(err);
        res.sendStatus(200);
    });
});


// show_specific_users_post..
app.get('/api/user_posts', function(req, res){
    Book.find({ownerId: req.query.user}).exec((err, docs) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(docs);
    });
});

// user_show (profile)..
app.get('/api/auth', auth, function(req, res){
    res.status(200).json({
        isAuth: true,
        id: req.user._id,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname
    });
});

// post reviewer from user find with books ownerId...
app.get('/api/getReviewer', function(req, res){
    User.find({_id: req.query.ownerId}).then(docs => {
        res.status(200).json({
            firstname: docs[0].name,
            lastname: docs[0].lastname
        });

    }).catch(err => {
        if (err) return res.status(400).send(err);
    });
});



// POST.
// add_book..
app.post('/api/book', function(req, res){
    const book = new Book(req.body);

    book.save(function(err, docs){
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            bookId: docs._id
        });
    });
});

// register..
app.post('/api/register', function(req, res){
    const user = new User(req.body);

    user.save(function(err, docs){
        if (err) return res.status(401).json({success: false, err});
        res.status(201).json({
            success: true,
            user: docs
        });
    });
});

// login..
app.post('/api/login', function(req, res){
    // Email compare is this our previous user here to login..
    User.findOne({email: req.body.email}, function(err, user){
        if (!user) return res.status(401).json({isAuth: false, message: 'Auth failed, wrong Email!'});
        if (err) return res.status(400).send(err);

        // Password compare with registered user when login this user..
        user.comparePassword(req.body.password, function(err, isMatch){
            if (!isMatch) return res.json({
                isAuth: false,
                message: 'Auth failed, wrong password!'
            });
            if (err) return res.send(err);

            // Genarated User Token to Set Cookie..
            user.genarateToken(function(err, user){
                if (err) return res.status(400).send(err);
                res.cookie('auth', user.token).json({
                    isAuth: true,
                    id: user._id,
                    email: user.email
                });
            });
        });
    });
});


// UPDATE.
// update_book..
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
    Book.findByIdAndUpdate(req.body._id, req.body, {new: true}).then(docs => {
        res.status(200).json({
            success: true,
            docs
        });
    }).catch(err => {
        res.status(400).send(err);
    });
});


// DELETE.
// delete_book..
app.delete('/api/delete_book', function(req, res){
    let id = req.query.id;

    Book.findByIdAndDelete(id, (err) => {
        if (err) return res.status(400).send(err);
        res.status(200).json(true);
    });
});


// make port server connect..
const PORT = process.env.PORT || 8080;
app.listen(PORT, function(){
    console.log(`SERVER IS RUNNING on http://localhost:${PORT}`);
});
