const { Sequelize } = require('sequelize');
const sequelize = require('../config/db');
const teamModel = require('../model/teamModel')


const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.teams = require('./teamModel')
db.players = require('./PlayerModel')


// db.sequelize.sync({ force: false })
module.exports = db