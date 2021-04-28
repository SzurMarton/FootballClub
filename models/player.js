const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Player = db.model('Player',{
    playerName: String,
    birthDate: String,
    position: String,
    avgRating: String,
    _team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }
});

module.exports = Player;