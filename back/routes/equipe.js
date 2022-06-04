const express = require("express");
const router = express.Router();

const Equipe = require("../model/Equipe");
const uploadMulter = require("../middleware/upload");
const validation = require("../middleware/validation");
// add Equipe
router.post("/add", uploadMulter, validation, (req, res) => {
  const { nameTeam, responsable, name, secteur } = req.body;
  let image = req.file.path;
  const newEquipe = new Equipe({
    nameTeam,
    responsable,
    secteur,
    name,
    image,
  });

  newEquipe
    .save()
    .then((equipe) => res.send(equipe))
    .catch((err) => console.log(err));
});

// get All Equipe
router.get("/", (req, res) => {
  Equipe.find()
    .populate("responsable")
    .then((equipe) => res.send(equipe))
    .catch((err) => console.log(err));
});

// get Equipe by id
router.get("/:_id", (req, res) => {
  const { _id } = req.params;
  Equipe.findOne({ _id })
    .populate("responsable")
    .then((equipe) => res.send(equipe))
    .catch((err) => console.log(err));
});

// delete Equipe
router.delete("/:_id", (req, res) => {
  const { _id } = req.params;
  Equipe.findOneAndDelete({ _id: _id })
    .then(() => res.send("success"))
    .catch((err) => console.log(err));
});

router.put("/:_id", (req, res) => {
  let { _id } = req.params;
  Equipe.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
    .then(() => res.send("User has been updated"))
    .catch((err) => res.send(err));
});

module.exports = router;
