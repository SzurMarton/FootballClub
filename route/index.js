const authMW = require('../middleware/auth/authMW');
const logoutMW = require('../middleware/auth/logoutMW');
const passwordCheckMW = require('../middleware/auth/passwordCheckMW');
const delPlayerMW = require('../middleware/player/delPlayerMW');
const getPlayerMW = require('../middleware/player/getPlayerMW');
const savePlayerMW = require('../middleware/player/SavePlayerMW');
const getPlayerListMW = require('../middleware/player/getPlayerListMW');
const delTeamMW = require('../middleware/team/delTeamMW');
const saveTeamMW = require('../middleware/team/saveTeamMW');
const getTeamMW = require('../middleware/team/getTeamMW');
const getTeamListMW = require('../middleware/team/getTeamListMW');
const renderMW = require('../middleware/renderMW');

module.exports = function (app) {
    const objectRepository = {};

    app.use('/',
        passwordCheckMW(objectRepository),
        renderMW(objectRepository,'index'));

    app.get('/team',
        authMW(objectRepository),
        getTeamListMW(objectRepository),
        renderMW(objectRepository,'teamlist'));

    app.use('/team/new',
        authMW(objectRepository),
        saveTeamMW(objectRepository),
        renderMW(objectRepository,'teammod'));

    app.use('team/edit/:teamid',
        authMW(objectRepository),
        saveTeamMW(objectRepository),
        renderMW(objectRepository,'teammod'));

    app.get('/team/del/:teamid',
        authMW(objectRepository),
        getTeamMW(objectRepository),
        delTeamMW(objectRepository));

    app.get('/player/:teamid',
        authMW(objectRepository),
        getTeamMW(objectRepository),
        getPlayerListMW(objectRepository),
        renderMW(objectRepository,'playerlist'));

    app.use('/player/:teamid/new',
        authMW(objectRepository),
        getTeamMW(objectRepository),
        savePlayerMW(objectRepository),
        renderMW(objectRepository,'playermod'));

    app.use('/player/:teamid/edit/:playerid',
        authMW(objectRepository),
        getTeamMW(objectRepository),
        getPlayerMW(objectRepository),
        savePlayerMW(objectRepository),
        renderMW(objectRepository,'playermod'));

    app.get('/player/:teamid/del/:playerid',
        authMW(objectRepository),
        getTeamMW(objectRepository),
        getPlayerMW(objectRepository),
        delPlayerMW(objectRepository));

    app.use('/logout',
        logoutMW(objectRepository));

};