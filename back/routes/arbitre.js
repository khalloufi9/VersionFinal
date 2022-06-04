const express = require("express");
const router = express.Router();

const Arbitre = require("../model/Arbitre");

// add Arbitre
router.post("/add", (req, res) => {
  const newArbitre = new Arbitre({ ...req.body })
  newArbitre
      .save()
      .then(arbitre => res.status(200).json({ msg: "successfuly added", arbitre }))
      .catch(err => res.status(400).json(err))
})


// get All Arbitres
router.get("/", (req, res) => {
  Arbitre.find()
    .then((arbitre) => res.send(arbitre))
    .catch((err) => console.log(err));
});

// get Arbitre by id
router.get("/:_id", (req, res) => {
  const { _id } = req.params;
  Arbitre.findOne({ _id })
    .then((arbitre) => res.send(arbitre))
    .catch((err) => console.log(err));
});

// delete Arbitre
router.delete("/:_id", (req, res) => {
  const { _id } = req.params;
  Arbitre.findOneAndDelete({ _id: _id })
    .then(() => res.send("success"))
    .catch((err) => console.log(err));
});

// update Arbitre
router.put("/:_id", (req, res) => {
  const { _id } = req.params;
  const { name, contact } = req.body;
  Arbitre.findOneAndUpdate(
    { _id },
    {
      $set: {
        name,
        contact,
      },
    }
  )
    .then((arbitre) => res.send( arbitre))
    .catch((err) => console.log(err));
});

module.exports = router;
