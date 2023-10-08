import {DataTypes} from 'sequelize';
import sequelize from '../config.js';
import serviceTypes from './serviceTypes.js';
import Provider from './Provider.js';

const Service = sequelize.define('service', {
  _id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  provider: {
    type: DataTypes.INTEGER,
    references: {
      model: Provider,
      key: '_id'
    },
    allowNull: false
  },
  serviceType: {
    type: DataTypes.INTEGER,
    references:{
      model: serviceTypes,
      key: '_id'
    },
    allowNull: false
  },
  status:{
    type: DataTypes.ENUM,
    values: ['planned', 'ongoing', 'finished'],
    allowNull: false
  },
  dateInit: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateEnd: {
    type: DataTypes.DATE
  },
  otherArgs: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  }
  
})

export default Service;
