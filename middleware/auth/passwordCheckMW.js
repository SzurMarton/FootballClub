/*
* Checks the password from post, if correct password which is going to be a hard coded password
* creates a session for the user and redirects to /team
* case of wrong password message to res.locals.wrongpassword
* */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof req.body.password === 'undefined'){
            return next();
        }

        if(req.body.password === 'admin'){
            req.session.logdin = true;
            return res.redirect('/team');
        }

        res.locals.error = 'Wrong Password!';
        return next();
    };
};