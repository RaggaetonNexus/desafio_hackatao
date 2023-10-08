import { DataTypes } from "sequelize";
import sequelize from "../config.js";
import Provider from "./Provider.js";

const User = sequelize.define('user', {
  cpf: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false
  },
  providerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Provider,
      key: '_id'
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
});

export default User;
