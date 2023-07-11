const db = require('../model/index');
const CustomError = require('../utils/CustomError')

class BaseController {
    constructor(model) {
        this.model = model;
    }

    async create(req, res, next) {
        const data = req.body;
        const newRecord = await this.model.create(data);
        if (newRecord) {
            res.status(201).json({ success: true, message: 'successfully inserted data', data: newRecord });
        } else {
            return next(new CustomError(` not found `, 404));
        }
    }

    async delete(req, res, next) {
        const { params: { id } } = req;
        const newRecord = await this.model.destroy({ where: { id } });
        if (!newRecord) {
            return next(new CustomError(`please check id : ${id} `, 404));
        } else {
            res.status(200).json({ success: true, message: 'successfully inserted data', data: newRecord });
        }

    }

    async update(req, res, next) {
        const { params: { id } } = req;
        const newRecord = await this.model.update(req.body, { where: { id } });
        if (newRecord == 0) {
            return next(new CustomError(`please check id : ${id} `, 404));
        } else {
            res.status(200).json({ success: true, message: 'successfully updated data', data: newRecord });
        }
    }
}



module.exports = BaseController;