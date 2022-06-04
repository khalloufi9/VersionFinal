const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
  firstTeam: { type: Schema.Types.ObjectId, ref: "equipe", required: true },
  secondTeam: { type: Schema.Types.ObjectId, ref: "equipe", required: true },
  terrain: { type: Schema.Types.ObjectId, ref: "terrain", required: true },
  arbitre: { type: Schema.Types.ObjectId, ref: "arbitre", required: true },
  gangnant: { type: Schema.Types.ObjectId, ref: "equipe" },
  date: { type: Date, required: true },
});
module.exports = Match = mongoose.model("match", MatchSchema);
