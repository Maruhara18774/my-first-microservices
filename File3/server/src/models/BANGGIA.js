const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BANGGIA', {
    ID_BANGGIA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GIA_MOTNGAY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    GIA_MOTTUAN: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    GIA_MOTTHANG: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BANGGIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__BANGGIA__3342FE05B3899322",
        unique: true,
        fields: [
          { name: "ID_BANGGIA" },
        ]
      },
    ]
  });
};
