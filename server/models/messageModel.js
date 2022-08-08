// const { DataTypes } = require("sequelize");

// const model = (sequelize) => {
//   const attributes = {
//     message: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     users: { type: DataTypes.ARRAY },
//     // sender: { type: DataTypes.BOOLEAN, defaultValue: false },
//     // avatarImage: { type: DataTypes.STRING, defaultValue: "" },
//     // password: { type: DataTypes.STRING, allowNull: false },
//   };

//   return sequelize.define("Message", attributes);
// };

// module.exports = model;

const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    message: {
      text: { type: String, required: true },
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Messages", MessageSchema);
