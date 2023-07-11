const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const teamModel = require('../model/teamModel')


const PlayerModel = sequelize.define('players', {

    PlayerName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM,
        values: ['batsman', 'bowler', 'all-rounder'],
        allowNull: false
    },
    TeamId: {
        type: DataTypes.BIGINT,
        references: {
            model: 'teams',
            key: 'id'
        }
    }
})



module.exports = PlayerModel




