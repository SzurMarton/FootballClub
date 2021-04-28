/*
* Saves a team to the database parameters from Post
* if res.locals.team exists updates the team else create new team
* redirects to /team
* */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const TeamModel = requireOption(objectrepository,'TeamModel');
    return function (req, res, next) {
        if(typeof  req.body.teamname === 'undefined' || typeof  req.body.playercount === 'undefined' || typeof  req.body.coach === 'undefined' || typeof  req.body.founded === 'undefined'){
            return next();
        }
        if(typeof res.locals.team === 'undefined'){
            res.locals.team = new TeamModel();
        }
        console.log(req.body.teamname);
        res.locals.team.teamName = req.body.teamname;
        res.locals.team.playerCount = req.body.playercount;
        res.locals.team.coach = req.body.coach;
        res.locals.team.founded = req.body.founded;

        res.locals.team.save(err => {
            if (err){
                return next(err);
            }
            return  res.redirect('/team');
        });
    };
};