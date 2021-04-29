/*
*  If loged in ok, else redirect to /
* */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof req.session.logdin === 'undefined' &&
            req.session.logdin === true) {
            return res.redirect('/');
        }

        next();
    };
};