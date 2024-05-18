const { DataTypes, Model } = require("sequelize");
const sequelize = require("../bd/Connection");

class Task extends Model {}

Task.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expectation_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  priority: {
    type: DataTypes.ENUM,
    values: ["baja", "media", "alta"],
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM,
    values: ["pendiente", "en progreso", "completado"],
    allowNull: false,
  }
}, {
  sequelize,
  modelName: "Task",
});

module.exports = Task;
