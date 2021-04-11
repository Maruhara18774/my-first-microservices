var DataTypes = require("sequelize").DataTypes;
var _BANGGIA = require("./BANGGIA");
var _CHITIETCSVC = require("./CHITIETCSVC");
var _CHITIETNOITHAT = require("./CHITIETNOITHAT");
var _CSVC = require("./CSVC");
var _CSVCNHA = require("./CSVCNHA");
var _DATCANHO = require("./DATCANHO");
var _HINHANHPHONG = require("./HINHANHPHONG");
var _LOAIGIUONG = require("./LOAIGIUONG");
var _LOAIPHONG = require("./LOAIPHONG");
var _NHA = require("./NHA");
var _NOITHAT = require("./NOITHAT");
var _NOITHATPHONG = require("./NOITHATPHONG");
var _PHONG = require("./PHONG");
var _STYLE = require("./STYLE");
var _STYLENHA = require("./STYLENHA");
var _TAIKHOAN = require("./TAIKHOAN");
var _THONGTINTAIKHOAN = require("./THONGTINTAIKHOAN");

function initModels(sequelize) {
  var BANGGIA = _BANGGIA(sequelize, DataTypes);
  var CHITIETCSVC = _CHITIETCSVC(sequelize, DataTypes);
  var CHITIETNOITHAT = _CHITIETNOITHAT(sequelize, DataTypes);
  var CSVC = _CSVC(sequelize, DataTypes);
  var CSVCNHA = _CSVCNHA(sequelize, DataTypes);
  var DATCANHO = _DATCANHO(sequelize, DataTypes);
  var HINHANHPHONG = _HINHANHPHONG(sequelize, DataTypes);
  var LOAIGIUONG = _LOAIGIUONG(sequelize, DataTypes);
  var LOAIPHONG = _LOAIPHONG(sequelize, DataTypes);
  var NHA = _NHA(sequelize, DataTypes);
  var NOITHAT = _NOITHAT(sequelize, DataTypes);
  var NOITHATPHONG = _NOITHATPHONG(sequelize, DataTypes);
  var PHONG = _PHONG(sequelize, DataTypes);
  var STYLE = _STYLE(sequelize, DataTypes);
  var STYLENHA = _STYLENHA(sequelize, DataTypes);
  var TAIKHOAN = _TAIKHOAN(sequelize, DataTypes);
  var THONGTINTAIKHOAN = _THONGTINTAIKHOAN(sequelize, DataTypes);

  NHA.belongsTo(BANGGIA, { as: "ID_BANGGIA_BANGGIum", foreignKey: "ID_BANGGIA"});
  BANGGIA.hasMany(NHA, { as: "NHAs", foreignKey: "ID_BANGGIA"});
  CSVCNHA.belongsTo(CHITIETCSVC, { as: "ID_CT_CSVC_CHITIETCSVC", foreignKey: "ID_CT_CSVC"});
  CHITIETCSVC.hasMany(CSVCNHA, { as: "CSVCNHAs", foreignKey: "ID_CT_CSVC"});
  NOITHATPHONG.belongsTo(CHITIETNOITHAT, { as: "ID_CT_NOITHAT_CHITIETNOITHAT", foreignKey: "ID_CT_NOITHAT"});
  CHITIETNOITHAT.hasMany(NOITHATPHONG, { as: "NOITHATPHONGs", foreignKey: "ID_CT_NOITHAT"});
  CHITIETCSVC.belongsTo(CSVC, { as: "ID_CT_CSVC_CSVC", foreignKey: "ID_CT_CSVC"});
  CSVC.hasOne(CHITIETCSVC, { as: "CHITIETCSVC", foreignKey: "ID_CT_CSVC"});
  PHONG.belongsTo(LOAIGIUONG, { as: "ID_LOAIGIUONG_LOAIGIUONG", foreignKey: "ID_LOAIGIUONG"});
  LOAIGIUONG.hasMany(PHONG, { as: "PHONGs", foreignKey: "ID_LOAIGIUONG"});
  PHONG.belongsTo(LOAIPHONG, { as: "ID_LOAIPHONG_LOAIPHONG", foreignKey: "ID_LOAIPHONG"});
  LOAIPHONG.hasMany(PHONG, { as: "PHONGs", foreignKey: "ID_LOAIPHONG"});
  DATCANHO.belongsTo(NHA, { as: "ID_NHA_NHA", foreignKey: "ID_NHA"});
  NHA.hasMany(DATCANHO, { as: "DATCANHOs", foreignKey: "ID_NHA"});
  PHONG.belongsTo(NHA, { as: "ID_NHA_NHA", foreignKey: "ID_NHA"});
  NHA.hasMany(PHONG, { as: "PHONGs", foreignKey: "ID_NHA"});
  STYLENHA.belongsTo(NHA, { as: "ID_NHA_NHA", foreignKey: "ID_NHA"});
  NHA.hasMany(STYLENHA, { as: "STYLENHAs", foreignKey: "ID_NHA"});
  CHITIETNOITHAT.belongsTo(NOITHAT, { as: "ID_CT_NOITHAT_NOITHAT", foreignKey: "ID_CT_NOITHAT"});
  NOITHAT.hasOne(CHITIETNOITHAT, { as: "CHITIETNOITHAT", foreignKey: "ID_CT_NOITHAT"});
  HINHANHPHONG.belongsTo(PHONG, { as: "ID_PHONG_PHONG", foreignKey: "ID_PHONG"});
  PHONG.hasMany(HINHANHPHONG, { as: "HINHANHPHONGs", foreignKey: "ID_PHONG"});
  NOITHATPHONG.belongsTo(PHONG, { as: "ID_PHONG_PHONG", foreignKey: "ID_PHONG"});
  PHONG.hasMany(NOITHATPHONG, { as: "NOITHATPHONGs", foreignKey: "ID_PHONG"});
  STYLENHA.belongsTo(STYLE, { as: "ID_STYLE_STYLE", foreignKey: "ID_STYLE"});
  STYLE.hasMany(STYLENHA, { as: "STYLENHAs", foreignKey: "ID_STYLE"});
  NHA.belongsTo(TAIKHOAN, { as: "ID_TAIKHOAN_TAIKHOAN", foreignKey: "ID_TAIKHOAN"});
  TAIKHOAN.hasMany(NHA, { as: "NHAs", foreignKey: "ID_TAIKHOAN"});
  TAIKHOAN.belongsTo(THONGTINTAIKHOAN, { as: "ID_TT_TAIKHOAN_THONGTINTAIKHOAN", foreignKey: "ID_TT_TAIKHOAN"});
  THONGTINTAIKHOAN.hasMany(TAIKHOAN, { as: "TAIKHOANs", foreignKey: "ID_TT_TAIKHOAN"});

  return {
    BANGGIA,
    CHITIETCSVC,
    CHITIETNOITHAT,
    CSVC,
    CSVCNHA,
    DATCANHO,
    HINHANHPHONG,
    LOAIGIUONG,
    LOAIPHONG,
    NHA,
    NOITHAT,
    NOITHATPHONG,
    PHONG,
    STYLE,
    STYLENHA,
    TAIKHOAN,
    THONGTINTAIKHOAN,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
