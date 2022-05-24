import { Sequelize } from 'sequelize';
import config from 'config';

const { databaseName, databaseHost, databaseUser, databasePassword } = config.get('database');

const db = new Sequelize(databaseName, databaseUser, databasePassword, {
    host: databaseHost,
    dialect: 'postgres',
    define: {
        createdAt: false,
        updatedAt: false
    }
});

export default db;
