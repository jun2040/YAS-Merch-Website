import { Model, DataTypes } from 'sequelize';
import db from '../config/database.config';

export interface ProductsInstanceAttributes {
    id: string;
    image: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    isPreorder: boolean;
}

export default class ProductsInstance extends Model<ProductsInstanceAttributes> {};

ProductsInstance.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        isPreorder: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize: db,
        tableName: 'products'
    }
);
