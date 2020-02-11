import { Model, Sequelize, STRING, NUMBER } from 'sequelize'
import Names from './Names'

export default class Lastnames extends Model { };

Lastnames.init({
    ID: {
        type: NUMBER,
        primaryKey: true
    },
    Lastname: {
        type: STRING,

    }
}, { sequelize: new Sequelize, modelName: 'Lastnames' });

Lastnames.hasOne(Names)