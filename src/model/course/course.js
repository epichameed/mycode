import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const courseModel = sequelize.define("course", {
  courseName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  courseId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  creditHours: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default courseModel;
