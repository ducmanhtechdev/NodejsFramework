import { Model, Sequelize }  from 'sequelize';
require('dotenv').config();
const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect:  'mysql'
});
const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}



export default connection; 
