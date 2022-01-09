const dbConfig = require("../helpers/db");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userModel = require("./userModel")(sequelize, Sequelize);
db.addressModel = require("./addressModel")(sequelize, Sequelize);

module.exports = db;
