const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAIKHOAN', {
    ID_TAIKHOAN: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TEN_TAIKHOAN: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "UQ__TAIKHOAN__6B714C8E6070408B"
    },
    MATKHAU: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ROLE_TAIKHOAN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ID_TT_TAIKHOAN: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'THONGTINTAIKHOAN',
        key: 'ID_TT_TAIKHOAN'
      }
    }
  }, {
    sequelize,
    tableName: 'TAIKHOAN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TAIKHOAN__EB942D7FFD81C355",
        unique: true,
        fields: [
          { name: "ID_TAIKHOAN" },
        ]
      },
      {
        name: "UQ__TAIKHOAN__6B714C8E6070408B",
        unique: true,
        fields: [
          { name: "TEN_TAIKHOAN" },
        ]
      },
    ]
  });
};
