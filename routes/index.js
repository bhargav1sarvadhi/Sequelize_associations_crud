module.exports = routes = require('express').Router();
const CustomError = require('../utils/CustomError')
const invalidRoute = (req, res, next) => {
    return next(new CustomError(`${req.url} - Bad request`, 404));
};


routes.use('/', require('./associateRoutes'))
routes.use('/teams', require('./teamsRoutes'))
routes.use('/players', require('./playerRoutes'));
routes.all('*', invalidRoute);
