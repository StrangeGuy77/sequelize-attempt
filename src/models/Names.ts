import { Model, Sequelize, STRING, NUMBER } from 'sequelize'
import Lastnames from './Lastnames'

export default class Names extends Model { };

Names.init({
    ID: {
        type: NUMBER,
        primaryKey: true
    },
    Name: {
        type: STRING,

    }
}, { sequelize: new Sequelize, modelName: 'Names' });

Names.hasMany(Lastnames)


