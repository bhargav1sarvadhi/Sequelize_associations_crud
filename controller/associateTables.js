const { where } = require('sequelize');
const db = require('../model/index');
const CustomError = require('../utils/CustomError')
const TeamModel = db.teams
const PlayerModel = db.players


const oneTeamgetAllPlayers = async (req, res, next) => {
    const { params: { id } } = req;
    const data = await PlayerModel.findOne({
        include: [{
            model: TeamModel,
            attributes: ['TeamName']
        }], where: { id }
    })
    if (data) {
        res.status(200).json({ success: true, message: 'successfully finded data', data: data });
    } else {
        return next(new CustomError(`please check id : ${id} `, 404));
    }
}

const getonePlayerwithTeam = async (req, res, next) => {
    const { params: { id } } = req;
    const data = await PlayerModel.findOne({
        include: [{
            model: TeamModel,
            attributes: ['TeamName']
        }], where: { id }
    })
    if (data) {
        res.status(200).json({ success: true, message: 'successfully finded data', data: data });
    } else {
        return next(new CustomError(`please check id : ${id} `, 404));
    }
}

const batsman = async (req, res, next) => {
    const { params: { id } } = req;
    const data = await TeamModel.findOne({
        include: [{
            model: PlayerModel,
            attributes: ['PlayerName', 'type'],
            where: {
                type: 'batsman'
            }
        }],
        attributes: ['TeamName'],
        where: { id }
    })
    if (data) {
        return res.status(200).json({ success: true, message: 'successfully finded data', data: data });
    } else {
        return next(new CustomError(`please check id : ${id} `, 404));
    }
}

const bowler = async (req, res, next) => {
    const { params: { id } } = req;
    const data = await TeamModel.findOne({
        include: [{
            model: PlayerModel,
            attributes: ['PlayerName', 'type'],
            where: {
                type: 'bowler'
            }
        }],
        attributes: ['TeamName'],
        where: { id }
    })
    if (data) {
        res.status(200).json({ success: true, message: 'successfully finded data', data: data });
    } else {
        return next(new CustomError(`please check id : ${id} `, 404));
    }
}

const allRounder = async (req, res, next) => {
    const { params: { id } } = req;
    const data = await TeamModel.findOne({
        include: [{
            model: PlayerModel,
            attributes: ['PlayerName', 'type'],
            where: {
                type: 'all-rounder'
            }
        }],
        attributes: ['TeamName'],
        where: { id }
    })
    if (data) {
        res.status(200).json({ success: true, message: 'successfully finded data', data: data });
    } else {
        return next(new CustomError(`please check id : ${id} `, 404));
    }
}

const allTeamwithPlayers = async (req, res, next) => {
    const data = await TeamModel.findAll({
        include: [{
            model: PlayerModel,
            attributes: ['PlayerName']
        }],
        attributes: ['TeamName']
    })
    if (data) {
        res.status(200).json({ success: true, message: 'successfully finded data', data: data });
    }
}



module.exports = { oneTeamgetAllPlayers, getonePlayerwithTeam, batsman, bowler, allRounder, allTeamwithPlayers }