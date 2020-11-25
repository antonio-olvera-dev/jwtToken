import { Model, DataTypes, Sequelize } from "sequelize";
import { database } from "../databases";
import { Clients } from "./clients.model";
import { Products } from "./products.model";



export class Shopings extends Model {

    public id!: number;
    public ClientsId!: number;
    public ProductsId!: number;
    public createdAt!: Date;
    public updateAt!: Date



}


Shopings.init({

    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    ClientsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Clients,
            key: 'id'
        }

    },
    ProductsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Products,
            key: 'id'
        }

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
        tableName: 'shopings',
        sequelize: database
    });

    Products.belongsToMany(Clients, { through: "shopings", foreignKey: 'ProductsId', otherKey: 'ClientsId' });
    Clients.belongsToMany(Products, { through: "shopings", foreignKey: 'ClientsId', otherKey: 'ProductsId' });

