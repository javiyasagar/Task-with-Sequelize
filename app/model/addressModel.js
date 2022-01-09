module.exports = (sequelize, Sequelize) => {
    return sequelize.define("address-book", {
        title: {
            type: Sequelize.STRING
        },
        addressLine1: {
            type: Sequelize.STRING
        },
        addressLine2: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.ENUM,
            values: ['Ahmedabad', 'Ghandhinagar', 'Rajkot', 'Vadodara', 'Morabi']
        },
        state: {
            type: Sequelize.ENUM,
            values: ['Gujarat', 'Mumbai', 'Delhi', 'Rajasthan']
        },
        country: {
            type: Sequelize.ENUM,
            values: ['India', 'China', 'Pakistan', 'America']
        },
        pinCode: {
            type: Sequelize.INTEGER
        },
    }, { freezeTableName: true, timestamps: false })
};