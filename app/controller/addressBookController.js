const db = require("../model/sequelize");
const Address = db.addressModel;
const { GeneralResponse } = require("../utils/response");
const { GeneralError } = require("../utils/error");
const config = require("../utils/config");
const logger = require('../loggers/logger');
require('dotenv').config();


exports.address = async (req, res, next) => {
    try {
        const result = await Address.bulkCreate(req.body);
        if (result) {
            await next(
                new GeneralResponse(
                    "user address successfully added",
                    undefined,
                    config.HTTP_CREATED
                )
            );
        } else {
            await next(
                new GeneralError(
                    "something went wrong",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }
    } catch (err) {
        logger.error("err", err)
        next(new GeneralError("user address failed"));
    }
};

exports.viewAddress = async (req, res, next) => {
    try {
        const userValue = await Address.findOne({ where: { id: req.params.id } })
        if (userValue) {
            await next(
                new GeneralResponse(
                    "user address details",
                    userValue,
                    config.HTTP_CREATED
                )
            );
        } else {
            await next(
                new GeneralError(
                    "user address not found",
                    undefined,
                    config.HTTP_NOT_FOUND
                )
            );
        }
    } catch (err) {
        logger.error("err", err)
        next(new GeneralError("user address failed"))
    }
};

exports.viewAllAddress = async (req, res, next) => {
    try {
        const userValue = await Address.findAll()
        if (userValue) {
            await next(
                new GeneralResponse(
                    "user address details",
                    userValue,
                    config.HTTP_CREATED
                )
            );
        } else {
            await next(
                new GeneralError(
                    "something went wrong",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }
    } catch (err) {
        logger.error("err", err)
        next(new GeneralError("user address failed"))
    }
};

exports.updateAddress = async (req, res, next) => {
    try {
        const userData = {
            title: req.body.title,
            addressLine1: req.body.addressLine1,
            addressLine2: req.body.addressLine2,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            pinCode: req.body.pinCode
        }
        const userValue = await Address.findOne({ where: { id: req.params.id } })
        if (userValue) {
            const user = await Address.update(userData, { where: { id: req.params.id } });
            if (user) {
                await next(
                    new GeneralResponse(
                        "user address successfully update",
                        undefined,
                        config.HTTP_CREATED
                    )
                );
            }
            else {
                await next(
                    new GeneralError(
                        "something wrong",
                        undefined,
                        config.HTTP_ACCEPTED
                    )
                )
            }
        } else {
            await next(
                new GeneralError(
                    "user address not found",
                    undefined,
                    config.HTTP_NOT_FOUND
                )
            );
        }
    }
    catch {
        logger.error("err", err)
        next(new GeneralError("user address update process failed"))
    }
};

exports.deleteAddress = async (req, res, next) => {
    try {
        const result = await Address.findByPk(req.params.id);
        if (result) {
            result.destroy(req.params.id)
            await next(
                new GeneralResponse(
                    "user address successfully delete",
                    result,
                    undefined,
                    config.HTTP_CREATED
                )
            );
        } else {
            await next(
                new GeneralError(
                    "user address not found",
                    undefined,
                    config.HTTP_NOT_FOUND
                )
            );
        }
    }
    catch (err) {
        logger.error("err", err)
        next(new GeneralError("user address delete process failed"))
    }
}



