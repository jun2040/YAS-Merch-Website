import { Model, DataTypes } from 'sequelize';
import db from '../config/database.config';

export interface UsersInstanceAttributes {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export default class UsersInstance extends Model<UsersInstanceAttributes> {};

UsersInstance.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: db,
        tableName: 'users'
    }
);
