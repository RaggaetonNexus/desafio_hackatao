import { DataTypes } from "sequelize";
import sequelize from "../config.js";
import Service from "./Service.js";
import User from "./User.js";

const Request = sequelize.define('request', {
  service: {
    type: DataTypes.INTEGER,
    references: {
      model: Service,
      key: '_id'
    }
  },
  status: {
    type: DataTypes.ENUM,
    values: ['sent', 'accepted', 'refused']
  },
  title: {
    type: DataTypes.STRING,
  },
  desciption: {
    type: DataTypes.STRING,
  },
  author:{
    type: DataTypes.STRING,
    references: {
      model: User,
      key: 'cpf'
    },
    allowNull: false
  },
  address: {
    type: DataTypes.STRING
  }

});

export default Request;
