module.exports = Teamroutes = require('express').Router();
const asyncWrapper = require('../middleware/asyncwrapperFunction')
const { TeamController } = require('../controller/index');
const teamController = new TeamController();

Teamroutes.post('/', asyncWrapper(teamController.create.bind(teamController)));
Teamroutes.delete('/:id', asyncWrapper(teamController.delete.bind(teamController)));
Teamroutes.put('/:id', asyncWrapper(teamController.update.bind(teamController)));