const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Team = db.model('Team',{
    teamName: String,
    playerCount: Number,
    coach: String,
    founded: Number
});

module.exports = Team;