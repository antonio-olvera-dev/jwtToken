import { Model, DataTypes, Sequelize } from "sequelize";
import { database } from "../databases";



export class Users extends Model {

    public id!: number;
    public name!: string;
    public price!: number;
    public createdAt!: Date;
    public updateAt!: Date



}


Users.init({

    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    password: {
        type: DataTypes.INTEGER,
        allowNull: false,

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
        tableName: 'users',
        sequelize: database
    });
