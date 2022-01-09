const Joi = require("@hapi/joi");

module.exports = {
    address: Joi.array().items(Joi.object({
        title: Joi.string().required().empty().messages({
            "string.base": `title should be a type of 'text'`,
            "string.empty": `title cannot be an empty field`,
            "any.required": `title is a required field`,
        }),
        addressLine1: Joi.string().required().empty().messages({
            "string.base": `addressLine1 should be a type of 'text'`,
            "string.empty": `addressLine1 cannot be an empty field`,
            "any.required": `addressLine1 is a required field`,
        }),
        addressLine2: Joi.string().required().empty().messages({
            "string.base": `addressLine2 should be a type of 'text'`,
            "string.empty": `addressLine2 cannot be an empty field`,
            "any.required": `addressLine2 is a required field`,
        }),
        city: Joi.string().empty().required().valid('Ahmedabad', 'Ghandhinagar', 'Rajkot', 'Vadodara', 'Morabi').messages({
            "string.empty": `City cannot be an empty field`,
            "any.only": `City must be 'Ahmedabad', 'Ghandhinagar', 'Rajkot', 'Vadodara', 'Morabi'`,
            "string.city": `City format not valid`,
            "any.required": `City is a required field`,
        }),
        state: Joi.string().empty().required().valid('Gujarat', 'Mumbai', 'Delhi', 'Rajasthan').messages({
            "string.empty": `state cannot be an empty field`,
            "any.only": `state must be 'Gujarat', 'Mumbai', 'Delhi', 'Rajasthan'`,
            "string.state": `state format not valid`,
            "any.required": `state is a required field`,
        }),
        country: Joi.string().empty().required().valid('India', 'China', 'Pakistan', 'America').messages({
            "string.empty": `country cannot be an empty field`,
            "any.only": `country must be 'India', 'China', 'Pakistan', 'America'`,
            "string.country": `country format not valid`,
            "any.required": `country is a required field`,
        }),
        pinCode: Joi.string().required().empty().messages({
            "string.base": `pincode should be a type of 'text'`,
            "string.empty": `pincode cannot be an empty field`,
            "any.required": `pincode is a required field`,
        }),
    })
    ),
    addressUpdate: Joi.object({
        title: Joi.string().required().empty().messages({
            "string.base": `title should be a type of 'text'`,
            "string.empty": `title cannot be an empty field`,
            "any.required": `title is a required field`,
        }),
        addressLine1: Joi.string().required().empty().messages({
            "string.base": `addressLine1 should be a type of 'text'`,
            "string.empty": `addressLine1 cannot be an empty field`,
            "any.required": `addressLine1 is a required field`,
        }),
        addressLine2: Joi.string().required().empty().messages({
            "string.base": `addressLine2 should be a type of 'text'`,
            "string.empty": `addressLine2 cannot be an empty field`,
            "any.required": `addressLine2 is a required field`,
        }),
        city: Joi.string().empty().required().valid('Ahmedabad', 'Ghandhinagar', 'Rajkot', 'Vadodara', 'Morabi').messages({
            "string.empty": `City cannot be an empty field`,
            "any.only": `City must be 'Ahmedabad', 'Ghandhinagar', 'Rajkot', 'Vadodara', 'Morabi'`,
            "string.city": `City format not valid`,
            "any.required": `City is a required field`,
        }),
        state: Joi.string().empty().required().valid('Gujarat', 'Mumbai', 'Delhi', 'Rajasthan').messages({
            "string.empty": `state cannot be an empty field`,
            "any.only": `state must be 'Gujarat', 'Mumbai', 'Delhi', 'Rajasthan'`,
            "string.state": `state format not valid`,
            "any.required": `state is a required field`,
        }),
        country: Joi.string().empty().required().valid('India', 'China', 'Pakistan', 'America').messages({
            "string.empty": `country cannot be an empty field`,
            "any.only": `country must be 'India', 'China', 'Pakistan', 'America'`,
            "string.country": `country format not valid`,
            "any.required": `country is a required field`,
        }),
        pinCode: Joi.string().required().empty().messages({
            "string.base": `pincode should be a type of 'text'`,
            "string.empty": `pincode cannot be an empty field`,
            "any.required": `pincode is a required field`,
        }),
    })
}
