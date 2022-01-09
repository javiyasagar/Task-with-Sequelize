const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('dotenv').config();

require("./app/helpers/passport");

const cors = require("cors");
app.use(cors());

app.use('/', require('./app/routes/route'));

app.use(express.static(__dirname + '/uploads'));

app.use(require("./app/helpers/response"));
app.use(require("./app/helpers/error").handleJoiErrors);
app.use(require("./app/helpers/error").handleErrors);

const logger = require("./app/loggers/logger")

const db = require("./app/model/sequelize");
db.sequelize.sync();

const port = process.env.PORT || 4040;
app.listen(port, () => logger.info(`Listening on port ${port}...`));
