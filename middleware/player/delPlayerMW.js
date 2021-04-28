/*
* Delete the player from the database the player from is res.locals.player
* redirects to /player/:teamid
* */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof  res.locals.player === 'undefined'){
            return next();
        }

        res.locals.player.remove(err => {
            if(err){
                return next(err);
            }
            return res.redirect(`/player/${res.locals.team._id}`);
        })
    };
};