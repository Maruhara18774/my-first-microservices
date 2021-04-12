const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('THONGTINTAIKHOAN', {
    ID_TT_TAIKHOAN: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PHONE: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'THONGTINTAIKHOAN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__THONGTIN__66F3ACF457F17EC3",
        unique: true,
        fields: [
          { name: "ID_TT_TAIKHOAN" },
        ]
      },
    ]
  });
};
