const config  =  require('config.json');
const mysql = require('mysql2/promise');
const { Sequelie } = require('sequelize');

module.export = db = {};

initialze();

async function initialize() {

    const { host, port, user, paswword, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password, });
    await connection.query(`CREATE DATABASE IF NOT EXISTS  \`${database}\`;`);

    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    db.User = require('.. /users/user.model')(sequelize);

    await sequelize.sync({alter: true });
}