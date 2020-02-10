import { Model, Sequelize } from 'sequelize'

export default class Clients extends Model { };

Clients.init({
    title: ""
}, { sequelize: Sequelize, modelName: 'Clients' })