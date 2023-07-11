module.exports = associateRoutes = require('express').Router();
const asyncWrapper = require('../middleware/asyncwrapperFunction')
const { associateController } = require('../controller/index');


associateRoutes.get('/oneteamallplayers/:id', asyncWrapper(associateController.oneTeamgetAllPlayers))
associateRoutes.get('/getonePlayerwithTeam/:id', asyncWrapper(associateController.getonePlayerwithTeam))
associateRoutes.get('/batsman/:id', asyncWrapper(associateController.batsman))
associateRoutes.get('/bowler/:id', asyncWrapper(associateController.bowler))
associateRoutes.get('/allRounder/:id', asyncWrapper(associateController.allRounder))
associateRoutes.get('/allteamwithplayers', asyncWrapper(associateController.allTeamwithPlayers))