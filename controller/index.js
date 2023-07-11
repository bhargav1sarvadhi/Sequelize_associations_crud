const db = require('../model/index')
const teamModel = db.teams
const playersModel = db.players
const BaseController = require('../controller/BaseController');
const associateController = require('../controller/associateTables')

class TeamController extends BaseController {
    constructor() {
        super(teamModel);
    }
}

class PlayerController extends BaseController {
    constructor() {
        super(playersModel);
    }
}

module.exports = { TeamController, PlayerController, associateController };