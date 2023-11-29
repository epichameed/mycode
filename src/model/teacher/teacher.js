import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const teacherModel = sequelize.define("teacher", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  classes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  section: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default teacherModel;
