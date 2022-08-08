// const { DataTypes } = require("sequelize");

// const model = (sequelize) => {
//   const attributes = {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: "compositeIndex",
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: "compositeIndex",
//     },
//     isAvatarImageSet: { type: DataTypes.BOOLEAN, defaultValue: false },
//     avatarImage: { type: DataTypes.STRING, defaultValue: "" },
//     password: { type: DataTypes.STRING, allowNull: false },
//   };

//   const options = {
//     defaultScope: {
//       // exclude password hash by default
//       attributes: { exclude: ["password"] },
//     },
//     scopes: {
//       // include hash with this scope
//       withHash: { attributes: {} },
//     },
//   };

//   return sequelize.define("User", attributes, options);
// };

// module.exports = model;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImage: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Users", userSchema);
