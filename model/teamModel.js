const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const PlayerModel = require('../model/PlayerModel')


const teamModel = sequelize.define('teams', {
    TeamName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    CoachName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

teamModel.hasMany(PlayerModel, { foreignKey: 'TeamId' })
PlayerModel.belongsTo(teamModel, { foreignKey: 'TeamId' });

module.exports = teamModel





