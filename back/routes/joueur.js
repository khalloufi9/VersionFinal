const express = require("express");
const router = express.Router();

const Joueur = require("../model/Joueur");
const uploadMulter = require("../middleware/upload");
const validation = require("../middleware/validation");
// add joueur
// router.post("/add", (req, res) => {
//   const newjoueur = new Joueur({ ...req.body })
//   newjoueur
//       .save()
//       .then(joueur => res.status(200).json({ msg: "successfuly added", joueur }))
//       .catch(err => res.status(400).json(err))
// })

//add joueur
router.post("/add", uploadMulter, validation, (req, res) => {
  const { nameJoueur, poste, equipe, name } = req.body;
  let image = req.file.path;
  const newJoueur = new Joueur({
    nameJoueur,
    poste,
    image,
    name,
    equipe,
  });

  newJoueur
    .save()
    .then((joueur) => res.send(joueur))
    .catch((err) => console.log(err));
});

// get All joueur
router.get("/", (req, res) => {
  Joueur.find()
    .populate("equipe")
    .then((joueur) => res.send(joueur))
    .catch((err) => console.log(err));
});

// get Joueur by id
router.get("/:_id", (req, res) => {
  const { _id } = req.params;
  Joueur.findOne({ _id })
    .then((joueur) => res.send(joueur))
    .catch((err) => console.log(err));
});

// delete Joueur
router.delete("/:_id", (req, res) => {
  const { _id } = req.params;
  Joueur.findOneAndDelete({ _id: _id })
    .then(() => res.send("success"))
    .catch((err) => console.log(err));
});

router.get("/find/:query", (req, res) => {
  var query = req.params.query;

  Joueur.find({
    $or: [{ equipe: { _id: query } }],
  })
    .then((joueur) => res.send(joueur))
    .catch((err) => console.log(err));
});

module.exports = router;
