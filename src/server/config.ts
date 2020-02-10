import * as express from "express";
import { config } from 'dotenv'
import { Sequelize } from 'sequelize';

const app: express.Application = express();

export const startServer = async () => {
    config();
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
    await sequelize.authenticate().catch((err: any) => {
        if (err) {
            console.log("Error in the connection " + err)
        }
    })
    console.log('Connected to the database');
    app.listen(3000);
    console.log('Listening on port 3000')
}