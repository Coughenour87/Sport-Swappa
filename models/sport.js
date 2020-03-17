"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sport = sequelize.define(
    "Sport",
    {
      sport_name: DataTypes.STRING,
      professional: DataTypes.BOOLEAN
    },
    {}
  );
  Sport.associate = function(models) {
    models.Sport.belongsTo(models.Item, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Sport;
};
