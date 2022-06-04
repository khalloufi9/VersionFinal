const express = require("express");
const router = express.Router();

const Terrain = require("../model/Terrain");

// add Terrain
router.post("/add", (req, res) => {
  const { name,adress, contact } = req.body;
  const newTerrain = new Terrain({
    name,
    adress,
    contact,
  });
  newTerrain
    .save()
    .then((terrain) => res.send(terrain))
    .catch((err) => console.log(err));
});

// get All terrain
router.get("/", (req, res) => {
  Terrain.find()
    .then((terrain) => res.send(terrain))
    .catch((err) => console.log(err));
});

// get terrain by id
router.get("/:_id", (req, res) => {
  const { _id } = req.params;
  Terrain.findOne({ _id })
    .then((terrain) => res.send(terrain))
    .catch((err) => console.log(err));
});

// delete terrain
router.delete("/:_id", (req, res) => {
  const { _id } = req.params;
  Terrain.findOneAndDelete({ _id: _id })
    .then(() => res.send("success"))
    .catch((err) => console.log(err));
});

// update terrain
router.put('/:_id', (req, res) => {
  let { _id } = req.params
  User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
      .then(() => res.send("terrain has been updated"))
      .catch(err => res.send(err))
})

module.exports = router;
