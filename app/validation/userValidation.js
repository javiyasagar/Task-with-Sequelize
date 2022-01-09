const Joi = require("@hapi/joi");

module.exports = {
    register: Joi.object({
        name: Joi.string().required().empty().messages({
            "string.base": `Name should be a type of 'text'`,
            "string.empty": `Name cannot be an empty field`,
            "any.required": `Name is a required field`,
        }),
        gender: Joi.string().valid('male', 'female', 'other').required().empty().messages({
            "string.base": `Gender should be a type of 'text'`,
            "any.only": `Gender must be male, female or other`,
            "string.empty": `Gender cannot be an empty field`,
            "any.required": `Gender is a required field`,
        }),
        email: Joi.string().required().empty().email().messages({
            "string.base": `Email should be a type of 'text'`,
            "string.empty": `Email cannot be an empty field`,
            "string.email": `Email format not valid`,
            "any.required": `Email is a required field`,
        }),
        password: Joi.string().required().empty().min(6).max(16).messages({
            "string.base": `Password should be a type of 'text'`,
            "string.empty": `Password cannot be an empty field`,
            "string.min": `Password should be of minimum 6 characters`,
            "string.max": `Password should be of maximum 16 characters`,
            "any.required": `Password is a required field`,
        })
    }),
    login: Joi.object({
        email: Joi.string().required().empty().email().messages({
            "string.base": `email should be a type of 'text'`,
            "string.empty": `email cannot be an empty field`,
            "string.email": `email format not valid`,
            "any.required": `email is a required field`,
        }),
        password: Joi.string().required().empty().min(6).max(16).messages({
            "string.base": `password should be a type of 'text'`,
            "string.empty": `password cannot be an empty field`,
            "string.min": "password should be of minimum 6 characters",
            "string.max": "password should be of maximum 16 characters",
            "any.required": `password is a required field`,
        })
    }),

    updateProfile: Joi.object({
        name: Joi.string().required().empty().messages({
            "string.base": `Name should be a type of 'text'`,
            "string.empty": `Name cannot be an empty field`,
            "any.required": `Name is a required field`,
        }),
        gender: Joi.string().valid('male', 'female', 'other').required().empty().messages({
            "string.base": `Gender should be a type of 'text'`,
            "any.only": `Gender must be male, female or other`,
            "string.empty": `Gender cannot be an empty field`,
            "any.required": `Gender is a required field`,
        }),
        email: Joi.string().required().empty().email().messages({
            "string.base": `Email should be a type of 'text'`,
            "string.empty": `Email cannot be an empty field`,
            "string.email": `Email format not valid`,
            "any.required": `Email is a required field`,
        }),
    }),
    resetPassword: Joi.object({
        currentPassword: Joi.string().empty().required().messages({
            "string.base": `currentPassword should be a type of 'text'`,
            "string.empty": `currentPassword cannot be an empty field`,
            "any.required": `currentPassword is a required field`,
        }),
        password: Joi.string().empty().min(6).max(16).required().messages({
            "string.base": `password should be a type of 'text'`,
            "string.empty": `password cannot be an empty field`,
            "string.min": "password should be of minimum 6 characters",
            "string.max": "password can be of maximum 16 characters",
            "any.required": `password is a required field`,
        }),
        confirmPassword: Joi.string().empty().valid(Joi.ref('password')).required().messages({
            "string.base": `confirm password should be a type of 'text'`,
            "string.empty": `confirm password cannot be an empty field`,
            "any.only": "confirm password doesn't match password",
            "any.required": `confirm password is a required field`,
        })
    })
};
