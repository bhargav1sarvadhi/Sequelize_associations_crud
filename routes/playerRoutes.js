module.exports = playerRoutes = require('express').Router();
const asyncWrapper = require('../middleware/asyncwrapperFunction')
const { PlayerController } = require('../controller/index');
const playerController = new PlayerController();

playerRoutes.post('/', asyncWrapper(playerController.create.bind(playerController)));
playerRoutes.delete('/:id', asyncWrapper(playerController.delete.bind(playerController)));
playerRoutes.put('/:id', asyncWrapper(playerController.update.bind(playerController)));




