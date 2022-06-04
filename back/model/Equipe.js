const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EquipeSchema = new Schema({
  nameTeam: {
    type: String,
    required: true,
  },

  secteur: { type: String, required: true },
  image: { type: String, trim: true, required: true },
  name: { type: String, trim: true, required: true },
  responsable: { type: Schema.Types.ObjectId, ref: "user", required: true },
});
module.exports = Equipe = mongoose.model("equipe", EquipeSchema);
