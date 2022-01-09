const express = require('express');
const router = express();
const addressController = require('../../controller/addressBookController');
const { validator } = require("../../helpers/validator");
const addressValidation = require('../../validation/addressValidation');
const passport = require('passport');

router.post("/address", passport.authenticate("jwt", { session: false }), validator.body(addressValidation.address), addressController.address);

router.get("/viewAddress/:id", passport.authenticate("jwt", { session: false }), addressController.viewAddress);

router.get("/viewAllAddress", passport.authenticate("jwt", { session: false }), addressController.viewAllAddress);

router.put('/api/address/update/:id', passport.authenticate("jwt", { session: false }), validator.body(addressValidation.addressUpdate), addressController.updateAddress);

router.delete('/api/address/delete/:id', passport.authenticate("jwt", { session: false }), addressController.deleteAddress);

module.exports = router;

