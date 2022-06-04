const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Terrainchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});
module.exports = Terrain = mongoose.model("terrain", Terrainchema);
