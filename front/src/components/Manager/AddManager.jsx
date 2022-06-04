import React, { useState, useEffect } from "react";
import axios from "axios";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://www.kardi.tn/">
                ParcRoulant.tn
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
    },
    image: {
        backgroundImage: "url(https://i.imgur.com/2hXfN2a.png)",
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: "contain",
        backgroundPosition: "center",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "50%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    alert: {
        width: "60%",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const AddManeger = (props) => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("manager");
    const [contact, setContact] = useState("");
    const [exist, setExist] = useState("");

    const [formData, setFormData] = useState("");
    // const [info, setInfo] = useState({
    //   image: "",
    //   name: "",
    //   nameTeam: "",
    //   responsable: "",
    // });
    const [progressPercent, setProgressPercent] = useState(0);
    const [error, setError] = useState({
        found: false,
        message: "",
    });
    /** end states */

    // Upload image
    const upload = ({ target: { files } }) => {
        let data = new FormData();
        data.append("categoryImage", files[0]);
        data.append("profilePictureName", files[0].name);
        data.append("name", name);
        data.append("contact", contact);
        data.append("login", login);
        data.append("password", password);
        data.append("role", role);
        setFormData(data);
        console.log("data", data);
    };
    console.log(login); // Submit Form
    const handleSubmit = (e) => {
        e.preventDefault();
        // setInfo({
        //   image: "",
        //   name: "",
        //   nameTeam,
        //   responsable,
        // });
        setProgressPercent(0);
        const options = {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total);
                console.log(`${loaded}kb of ${total}kb | ${percent}%`);
                setProgressPercent(percent);
            },
        };
        axios
            .post("http://localhost:5000/user/add_user", formData, options)
            .then((res) => {
                console.log(res.data);
                setTimeout(() => {
                    // setInfo(res.data.equipe);
                    setProgressPercent(0);
                }, 1000);
            })
            .catch((err) => {
                console.log(err.response);
                setError({
                    found: true,
                    message: err.response.data.errors,
                });
                setTimeout(() => {
                    setError({
                        found: false,
                        message: "",
                    });
                    setProgressPercent(0);
                }, 3000);
            });
    };
    // const addUser = () => {
    //   axios
    //     .post("http://localhost:5000/user/add_user", {
    //       firstName,
    //       lastName,
    //       login,
    //       password,
    //       role,
    //       phone,
    //     })
    //     .then((response) => {
    //       if (response.status === 200) {
    //         props.history.push("/login");
    //       }
    //     })
    //     .catch((err) => {
    //       setExist("User Already Exist or you didn't select a role");
    //       setPassword("");
    //     });
    // };

    //   const ValidateEmail = (email) => {
    //     return /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
    //   };

    return (

        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
            <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography style={{ color: "#1f5156", fontSize: '30px', fontWeight: '700' }}>
                        Add Manager
                    </Typography>
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            height: "100%",
                            marginTop: "50px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                        }}
                    >
                        <TextField
                            autoComplete="fname"
                            name="name"
                            variant="outlined"
                            required
                            fullWidth
                            id="name"
                            label="name"
                            autoFocus
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            style={{ marginBottom: '20px' }}
                        />
                        <TextField
                            autoComplete="conatct"
                            name="contact"
                            variant="outlined"
                            required
                            fullWidth
                            id="contact"
                            label="contact"
                            autoFocus
                            value={contact}
                            onChange={(event) => setContact(event.target.value)}

                        />

                        <TextField
                            type="text"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="login"
                            label="login"
                            name="login"
                            autoComplete="login"
                            autoFocus
                            value={login}
                            onChange={(event) => setLogin(event.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <div className="progress mb-3 w-100">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${progressPercent}%` }}
                                aria-valuenow={progressPercent}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                {progressPercent}
                            </div>
                        </div>

                        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        > */}
                        <div class="upload-btn-wrapperp">
                            <PhotoSizeSelectActualIcon
                                style={{ color: "", height: "34px", width: "70px" }}
                            />
                            <input
                                type="file"
                                name="myfile"
                                aria-describedby="inputGroupFileAddon04"
                                onChange={upload}
                                id="inputGroupFile04"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            style={{
                                height: "40px",
                                margin: "0",
                                width: "170px !important",
                            }}
                        >
                            Submit
                        </button>
                        {/* </div> */}
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};

export default AddManeger;
