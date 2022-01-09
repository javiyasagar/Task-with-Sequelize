const express = require('express');
const router = express();

const userRouter = require('./Router/userRouter');
const addressRouter = require('./Router/addressRouter');

router.use('/', userRouter);
router.use('/', addressRouter);

module.exports = router;
