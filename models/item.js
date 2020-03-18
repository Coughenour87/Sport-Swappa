"use strict";
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      link: DataTypes.STRING,
      item_name: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
      sport_name: DataTypes.STRING,
      professional: DataTypes.BOOLEAN,
      description: DataTypes.TEXT
    },
    {}
  );
  Item.associate = function(models) {
    Item.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Item;
};
