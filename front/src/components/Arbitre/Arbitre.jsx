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
//
import { useDispatch ,useSelector} from 'react-redux'
import {getArbitres,AddArbitre} from '../../redux/action/actionarbitre'
  


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

const Arbitre = (props) => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [progressPercent, setProgressPercent] = useState(0);
    const [error, setError] = useState({
        found: false,
        message: "",
    });
    /** end states */

  //dispatch
  const dispatch=useDispatch()
  const tab=useSelector(state=>state.arbitre.arbitres)
  console.log("x")
  console.log(tab)
  {useEffect(()=>{
    dispatch(getArbitres())
      },[])}
   //fonction submit
 const register=(e)=>{
    const newArbitre={name,contact}
    e.preventDefault();
  dispatch(AddArbitre(newArbitre))}
        
    return (

        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
            <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography style={{ color: "#1f5156", fontSize: '30px', fontWeight: '700' }}>
                        Add Arbitre
                    </Typography>
                    <form
                       
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
                        <TextField style={{width:"400px",marginBottom:"10px"}}
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

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            onClick={register}
                            style={{
                                height: "40px",
                                margin: "0",
                                width: "170px !important",
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};

export default Arbitre;
