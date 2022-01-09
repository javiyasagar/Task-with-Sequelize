const express = require('express');
const router = express();
const userController = require('../../controller/userController');
const { upload } = require("../../services/multer");
const { validator } = require("../../helpers/validator");
const userValidation = require('../../validation/userValidation');
const passport = require('passport');

router.post("/registration", upload.single('image'), validator.body(userValidation.register), userController.registration);

router.post("/login", validator.body(userValidation.login), userController.login);

router.get("/viewProfile", passport.authenticate("jwt", { session: false }), userController.viewProfile);

router.post("/updateProfile", passport.authenticate("jwt", { session: false }), upload.single("image"), validator.body(userValidation.updateProfile), userController.updateProfile);

router.post("/resetPassword", passport.authenticate("jwt", { session: false }), validator.body(userValidation.resetPassword), userController.resetPassword);

module.exports = router;
