/*
* Saves a player to the database parameters from Post
* if res.locals.player exists updates the player else create new player
* redirects to /player/:teamid
* */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const PlayerModel = requireOption(objectrepository,'PlayerModel');

    return function (req, res, next) {
        if(typeof  req.body.playerName === 'undefined' || typeof  req.body.birthdate === 'undefined' || typeof  req.body.position === 'undefined' || typeof  req.body.avgrating === 'undefined')
        {
            return next();
        }
        if(typeof res.locals.player === 'undefined'){
            res.locals.player = new PlayerModel();
        }
        console.log(req.body);
        res.locals.player.playerName = req.body.playerName;
        res.locals.player.birthdate = req.body.birthdate.toString();
        res.locals.player.position = req.body.position;
        res.locals.player.avgrating = req.body.avgrating.toString();
        res.locals.player._team = res.locals.team._id;

        res.locals.player.save(err => {
            if (err){
                return next(err);
            }

            return res.redirect(`/player/${res.locals.team._id}`);
        });
    };
};