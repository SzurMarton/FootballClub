/*
* redirects to / , destroy session
* */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        req.session.destroy((error) => {
            res.redirect('/')
        });
    };
};