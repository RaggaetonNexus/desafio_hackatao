import {DataTypes} from 'sequelize';
import sequelize from '../config.js';

const Provider = sequelize.define('provider',{
  _id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
})

export default Provider;
