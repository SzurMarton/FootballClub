/*
*  If loged in ok, else redirect to /
* */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("authmw");
        next();
    };
};