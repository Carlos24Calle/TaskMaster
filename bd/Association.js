const User = require("../models/User.models");
const UserDetail = require("../models/UserDetail.models");
const Category = require("../models/Category.models");
const Task = require("../models/Tak.models");


// Users- UserDetail
User.hasOne(UserDetail, {
  foreignKey: {
    name: "user_id",
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
UserDetail.belongsTo(User, {
  foreignKey: "user_id",
});
// One to hasmany

User.hasMany(Task, {
  foreignKey: {
    name: "user_id",
    allowNull: true,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Task.belongsTo(User, {
  foreignKey: "user_id",
});

//One to hasmany


Category.hasMany(Task, {
  foreignKey: {
    name: "category_id",
    allowNull: true,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Task.belongsTo(Category, {
  foreignKey: "category_id",
});

// Queto.belongsToMany(Product, { through:  QuetoProduct, foreignKey: 'queto_id'});
// Product.belongsToMany(Queto, { through: QuetoProduct, foreignKey: 'product_id'});

// const createModels = async () => {
//   await Task.sync({alter:true});
//   await User.sync({alter:true});
//   await Category.sync({alter:true});
//   await UserDetail.sync({alter:true});


// };

// createModels();
