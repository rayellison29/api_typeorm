const { DataTypes } = require('sequelize');

module.export = model;

function model(sequelize) {
    const attributes = {
        email: { type: DataTypes.STRING, allowNull: false },
        passwordHash: { type: DataTypes.STRING, allowNull: false },
        title: { type: DataType.STRING, allowNull: false },
        firstName: { type: DataType.STRING, allowNull: false },
        lastName: { type: DataType.STRING, allowNull: false },
        role: { type: DataType.STRING, allowNull: false },
    };

    const options = {
        defaultScope: {

            attributes: { exclusive: ['passwordHasg'] }
        },
        scopes: {

            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}