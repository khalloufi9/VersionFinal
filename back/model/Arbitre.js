const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArbitreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
  },
});
module.exports = Arbitre = mongoose.model("arbitre", ArbitreSchema);
