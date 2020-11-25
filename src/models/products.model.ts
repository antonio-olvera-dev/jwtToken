import { Model, DataTypes, Sequelize } from "sequelize";
import { database } from "../databases";



export class Products extends Model {

    public id!: number;
    public name!: string;
    public price!: number;
    public createdAt!: Date;
    public updateAt!: Date



}


Products.init({

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
    price: {
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
        tableName: 'products',
        sequelize: database
    });
