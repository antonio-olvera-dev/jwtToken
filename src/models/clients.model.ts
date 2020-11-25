import { Model, DataTypes, Sequelize } from "sequelize";
import { database } from "../databases";



export class Clients extends Model {

    public id!: number;
    public name!: string;
    public familyname!: string;
    public createdAt!: Date;
    public updateAt!: Date



}


Clients.init({

    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    familyname: {
        type: DataTypes.DATE,
        allowNull: false

    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }


},
    {
        tableName: 'clients',
        sequelize: database
    });
