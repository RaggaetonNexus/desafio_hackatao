import DataTypes from 'sequelize';
import sequelize from '../config.js';

const ServiceTypes = sequelize.define('servicetypes',{
  _id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  typename: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
})


export default ServiceTypes;

