import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('master', 'sa', process.env.DB_PASSWORD, {
    dialectOptions: {
        options: {
            useUTC: false,
            dateFirst: 1,
        }
    },
    host: 'localhost',
    dialect: 'mssql'
})
sequelize.authenticate().then(() => console.log("Connected to the database")).catch((err: any) => {
    if (err) {
        console.log("Error in the connection " + err)
    }
})

export default sequelize;