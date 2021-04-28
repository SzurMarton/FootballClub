/*
* Deletes the team from the database the team is res.locals.team
* redirects to /team
* */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.team === 'undefined'){
            return next();
        }

        res.locals.team.remove(err => {
            if(err){
                return next(err);
            }
            return res.redirect(`/team`);
        })
    };
};