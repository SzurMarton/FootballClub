/*
* Get team from the database with the given id (:playerid)
* save result to res.locals.player
* */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const PlayerModel = requireOption(objectrepository, 'PlayerModel');

    return function (req, res, next) {
        console.log(req.params.playerid);

        PlayerModel.findOne({_id: req.params.playerid}, (err, player) => {
            if (err || !player) {
                return next(err);
            }
            res.locals.player = player;
            console.log(res.locals.player);
            return next();
        });
    };
};