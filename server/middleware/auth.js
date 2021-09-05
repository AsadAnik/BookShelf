const { User } = require('./../models/user');

// Auth Middleware Function..
function auth(req, res, next){
    const token = req.cookies.auth;

    User.findByToken(token, function(err, user){
        if (err) throw err;
        if (!user) return res.json({ error: true });

        req.token = token;
        req.user = user;
        next();
    });
}

module.exports = { auth };
