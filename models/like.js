const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = Schema({
  idPublication: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Publication",
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Like", LikeSchema);
