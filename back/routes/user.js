const express = require("express");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();
const User = require("../model/User");
const uploadMulter = require("../middleware/upload");
const validation = require("../middleware/validation");

// Get All/Users
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => console.error(err));
});

// Create an Account
router.post("/add_user", uploadMulter, validation, (req, res) => {
  const { name, login, password, role, contact, profilePictureName } = req.body;
  // let profilePictureName = req.body.name;
  let image = req.file.path;
  // Test if user already exist !
  User.findOne({ login }).then((user) => {
    if (user) {
      let errors = {};
      if (user.login === login) {
        errors.userName = "Login already exists";
      }
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name,
        login,
        password,
        role,
        contact,
        image,
        profilePictureName,
      });

      // Code the password using bcrypt module
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          newUser.password = hash;
          newUser
            .save()
            .then((newuser) => res.json(newuser))
            .catch((err) => console.error(err));
        });
      });
    }
  });
});

// login user!
router.post("/login", (req, res) => {
  const { login, password } = req.body;
  User.findOne({ login })
    .then((user) => {
      if (!user) res.sendStatus(404);
      else {
        bcrypt.compare(password, user.password).then((isMatched) => {
          if (isMatched) {
            const payload = {
              id: user._id,
              role: user.role,
            };
            jwt.sign(payload, "session", { expiresIn: 3600 }, (err, token) => {
              if (err) res.sendStatus(500);
              else {
                res.json({ token: token });
              }
            });
          } else res.sendStatus(400);
        });
      }
    })
    .catch((err) => res.send("Server error"));
});

// validate token
router.get(
  "/validate",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send(req.user);
  }
);
// get user by ID
router.get("/:id", (req, res) => {
  const _id = req.params.id;
  User.findOne({ _id })
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});

//delete user
router.delete("/:_id", (req, res) => {
  const { _id } = req.params;
  User.findOneAndDelete({ _id: _id })
    .then((user) => res.send("success"))
    .catch((err) => console.log(err));
});
//update
router.put("/updateimage/:id", uploadMulter, validation, (req, res) => {
  const _id = req.params.id;
  let profilePictureName = req.body.name;
  let imagepath = req.file.path;

  User.findOneAndUpdate(
    { _id },
    {
      $set: {
        imagepath,
        profilePictureName,
      },
    }
  )
    .then((user) => res.send("user image updated", user))
    .catch((err) => console.log(err));
});
router.put("/hasteam/:id", (req, res) => {
  const _id = req.params.id;
  let hasTeam = True;

  User.findOneAndUpdate(
    { _id },
    {
      $set: {
        hasTeam,
      },
    }
  )
    .then((user) => res.send("user image updated", user))
    .catch((err) => console.log(err));
});
module.exports = router;
