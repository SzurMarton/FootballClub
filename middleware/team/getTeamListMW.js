/*
* Get all teams from database store it at res.locals.teams
* */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const TeamModel = requireOption(objectrepository,'TeamModel');
    return function (req, res, next) {
        TeamModel.find({},(err,teams) => {
            if(err){
                return next(err);
            }
            res.locals.teams = teams;
            return next();
        });
    };
};