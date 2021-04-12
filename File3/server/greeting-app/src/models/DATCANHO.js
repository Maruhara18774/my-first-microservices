const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DATCANHO', {
    ID_DATCANHO: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_NHA: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'NHA',
        key: 'ID_NHA'
      }
    },
    SONGUOI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SO_GIUONGPHU: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    CHECKIN: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CHECKOUT: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    BUASANG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TONGTIEN: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DATCANHO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__DATCANHO__3CB74E5312DD80F4",
        unique: true,
        fields: [
          { name: "ID_DATCANHO" },
        ]
      },
    ]
  });
};
