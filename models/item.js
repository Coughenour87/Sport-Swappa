"use strict";
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      link: DataTypes.STRING,
      item_name: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2)
    },
    {}
  );
  Item.associate = function(models) {
    Item.hasOne(models.Sport, {
      onDelete: "cascade"
    });
  };
  return Item;
};
