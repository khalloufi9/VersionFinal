const express = require("express");
const router = express.Router();

const Match = require("../model/Match");

//add
router.post("/add", (req, res) => {
  const newmatch = new Match({ ...req.body });
  newmatch
    .save()
    .then((match) => res.status(200).json({ msg: "successfuly added", match }))
    .catch((err) => res.status(400).json(err));
});

// get All Match
router.get("/", (req, res) => {
  Match.find()
    .populate("firstTeam")
    .populate("secondTeam")
    .populate("terrain")
    .populate("arbitre")
    .populate("gangnant")
    .then((match) => res.send(match))
    .catch((err) => console.log(err));
});

// get match by id
router.get("/:_id", (req, res) => {
  const { _id } = req.params;
  Match.findOne({ _id })
    .populate("firstTeam")
    .populate("secondTeam")
    .populate("terrain")
    .populate("arbitre")
    .populate("gangnant")
    .then((match) => res.send(match))
    .catch((err) => console.log(err));
});

// delete match
router.delete("/:_id", (req, res) => {
  const { _id } = req.params;
  Match.findOneAndDelete({ _id: _id })
    .then(() => res.send("success"))
    .catch((err) => console.log(err));
});

// update match date
router.put("/date/:_id", (req, res) => {
  const { _id } = req.params;
  const { date } = req.body;
  Match.findOneAndUpdate(
    { _id },
    {
      $set: {
        date,
      },
    }
  )
    .then((match) => res.send("match Updated", match))
    .catch((err) => console.log(err));
});

// update match arbitre
router.put("/arbitre/:_id", (req, res) => {
  const { _id } = req.params;
  const { arbitre } = req.body;
  Match.findOneAndUpdate(
    { _id },
    {
      $set: {
        arbitre,
      },
    }
  )
    .then((match) => res.send("match Updated", match))
    .catch((err) => console.log(err));
});

// update match terrain
router.put("/terrain/:_id", (req, res) => {
  const { _id } = req.params;
  const { terrain } = req.body;
  Match.findOneAndUpdate(
    { _id },
    {
      $set: {
        terrain,
      },
    }
  )
    .then((match) => res.send("match Updated", match))
    .catch((err) => console.log(err));
});

// update match gangant
router.put("/gangant/:_id", (req, res) => {
  const { _id } = req.params;
  const { gangnant } = req.body;
  Match.findOneAndUpdate(
    { _id },
    {
      $set: {
        gangnant,
      },
    }
  )
    .then((match) => res.send("match Updated", match))
    .catch((err) => console.log(err));
});

module.exports = router;
