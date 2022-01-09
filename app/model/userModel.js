module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.ENUM,
            values: ['male', 'female', 'other']
        },
        image: {
            type: Sequelize.STRING
        }
    }, { freezeTableName: true, timestamps: false })
};