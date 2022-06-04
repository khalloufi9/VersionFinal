import { GET_JOUEURS, GET_JOUEUR_BYID } from "./actiontype";
import axios from "axios";

export const getJouers = () => async (dispatch) => {
  await axios
    .get("http://localhost:5000/joueur/")
    .then((res) => dispatch({ type: GET_JOUEURS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const getJouerbyId = (id) => async (dispatch) => {
  await axios
    .get(`http://localhost:5000/joueur/${id}`)
    .then((res) => dispatch({ type: GET_JOUEUR_BYID, payload: res.data }))
    .catch((err) => console.log(err));
};

export const AddJoueur = (newJoueur) => (dispatch) => {
  axios
    .post("http://localhost:5000/joueur/add", newJoueur)

    .then((res) => dispatch({ type: GET_JOUEURS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const deleteJquipe = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/joueur/${id}`)
    .then((res) => dispatch(getJouers()))
    .catch((err) => console.log(err));
};

export const updateJoueur = (id, updatedjoueur) => (dispatch) => {
  axios
    .put(`http://localhost:5000/joueur/${id}`, updatedjoueur)
    .then((res) => dispatch(getJouers(), { payload: res.data }))
    .catch((err) => console.log(err));
};

export const findJoueur = (query) => (dispatch) => {
  axios
    .get(`http://localhost:5000/joueur/find/${query}`)
    .then((res) => dispatch({ type: GET_JOUEURS, payload: res.data }))
    .catch((err) => console.log(err));
};
