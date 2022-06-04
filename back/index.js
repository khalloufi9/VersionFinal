const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const connectDB = require("./config/connectDB");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.use(passport.initialize());

app.use(express.static("./public"));
app.use("/uploads", express.static("uploads"));

// Passport Configuration
require("./middleware/passport")(passport);

connectDB();

const userRouter = require("./routes/user");
const equipeRouter = require("./routes/equipe");
const joueurRouter = require("./routes/joueur");
const terrainRouter = require("./routes/terrain");
const arbitreRouter = require("./routes/arbitre");
const matchRouter = require("./routes/match");
const AdminRouter = require("./routes/admin");

app.use("/user", userRouter);
app.use("/equipe", equipeRouter);
app.use("/joueur", joueurRouter);
app.use("/terrain", terrainRouter);
app.use("/arbitre", arbitreRouter);
app.use("/match", matchRouter);
app.use("/admin", AdminRouter);

const port = process.env.PORT || 5000
app.listen(port, err=>{
    err ? console.log(err)
        : console.log(`the server is running on http://localhost:${port}`)
})
