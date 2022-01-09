const bcrypt = require('bcrypt');
const db = require("../model/sequelize");
const User = db.userModel;
const { GeneralResponse } = require("../utils/response");
const { GeneralError } = require("../utils/error");
const config = require("../utils/config");
const logger = require('../loggers/logger');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.registration = async (req, res, next) => {
    try {
        if (!req.file) {
            await next(
                new GeneralError(
                    "Image is a required field",
                    undefined,
                    config.HTTP_BAD_REQUEST
                )
            );
        } else {
            const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
            const value = {
                name: req.body.name,
                email: req.body.email,
                gender: req.body.gender,
                password: encryptedPassword,
                image: req.file.filename
            };
            const query = await User.findOne({ where: { email: req.body.email } })
            if (query == null) {
                await User.create(value)
                await next(
                    new GeneralResponse(
                        "user successfully registered",
                        undefined,
                        config.HTTP_CREATED
                    )
                );
            } else {
                await next(
                    new GeneralError(
                        "user already exist",
                        undefined,
                        config.HTTP_ACCEPTED
                    )
                );
            }
        }
    } catch (err) {
        logger.error("err", err)
        next(new GeneralError("user registration failed"));
    }
};

exports.login = async (req, res, next) => {
    try {
        const value = await User.findOne({ where: { email: req.body.email } })
        if (value) {
            const comparison = await bcrypt.compare(req.body.password, value.password)
            if (comparison) {
                const jwtToken = jwt.sign(
                    { id: value.id },
                    process.env.JWR_SECRET)
                await next(
                    new GeneralResponse(
                        "user successfully login",
                        { token: jwtToken },
                        config.HTTP_SUCCESS
                    ));
            }
            else {
                await next(
                    new GeneralError(
                        "Password is incorrect",
                        undefined,
                        config.HTTP_ACCEPTED
                    ));
            }
        }
        else {
            await next(
                new GeneralError(
                    "user not found",
                    undefined,
                    config.HTTP_NOT_FOUND
                ));
        }

    } catch (err) {
        logger.error("err", err)
        next(new GeneralError(
            "user login failure"
        ));
    }
};

exports.viewProfile = async (req, res, next) => {
    try {
        const userValue = await User.findOne({ where: { id: req.user.id } })
        if (userValue) {
            await next(
                new GeneralResponse(
                    "viewProfile successfully",
                    userValue,
                    config.HTTP_CREATED
                )
            );
        }
        else {
            await next(
                new GeneralError(
                    "user not found",
                    undefined,
                    config.HTTP_NOT_FOUND
                ));
        }
    }
    catch (err) {
        logger.error("err", err)
        next(new GeneralError(
            "view Profile failure"
        ));
    }
};

exports.updateProfile = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
        }
        if (req.file) {
            data.image = req.file.filename;
        }
        const userValue = await User.findOne({ where: { id: req.user.id } })
        if (userValue) {
            const updateData = await User.update(data,
                { where: { id: req.user.id } });
            if (updateData) {
                await next(
                    new GeneralResponse(
                        "Data is update",
                        undefined,
                        config.HTTP_CREATED
                    )
                );
            }
        } else {
            await next(
                new GeneralError(
                    "user not found",
                    undefined,
                    config.HTTP_NOT_FOUND
                ));
        }
    }
    catch (err) {
        logger.error("err", err)
        next(new GeneralError("update Profile failed"));
    }
};

exports.resetPassword = async (req, res, next) => {
    try {
        const userValue = await User.findOne({ where: { id: req.user.id } });
        if (userValue) {
            const passwordValid = await bcrypt.compare(req.body.currentPassword, userValue.password);
            if (passwordValid) {
                const bcryptPassword = await bcrypt.hash(req.body.password, saltRounds);
                const passwordUpdate = { password: bcryptPassword };
                const response = User.update(passwordUpdate, { where: { id: req.user.id } });
                if (response) {
                    await next(
                        new GeneralResponse(
                            "Password is updated",
                            undefined,
                            config.HTTP_CREATED
                        )
                    );
                } else {
                    await next(
                        new GeneralError(
                            "Reset Password is failed",
                            undefined,
                            config.HTTP_ACCEPTED
                        ));
                }
            } else {
                await next(
                    new GeneralError(
                        "Current password is incorrect",
                        undefined,
                        config.HTTP_ACCEPTED
                    ));
            }
        } else {
            await next(
                new GeneralError(
                    "user not found",
                    undefined,
                    config.HTTP_NOT_FOUND
                ));
        }
    }
    catch (err) {
        logger.error("err", err)
        next(new GeneralError(
            "reset password is failure"
        ));
    }
}
