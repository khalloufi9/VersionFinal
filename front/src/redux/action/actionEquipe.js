import { GET_EQUIPES, GET_EQUIPE } from "./actiontype";
import axios from "axios";

export const getEquipes = () => async (dispatch) => {
  await axios
    .get("http://localhost:5000/equipe/")
    .then((res) => dispatch({ type: GET_EQUIPES, payload: res.data }))
    .catch((err) => console.log(err));
};

export const getEquipe = (id) => async (dispatch) => {
  await axios
    .get(`http://localhost:5000/equipe/${id}`)
    .then((res) => dispatch({ type: GET_EQUIPE, payload: res.data }))
    .catch((err) => console.log(err));
};

export const AddEquipe = (newEquipe) => (dispatch) => {
  axios
    .post("http://localhost:5000/equipe/add", newEquipe)

    .then(
      (res) => dispatch({ type: GET_EQUIPE, payload: res.data }),
      console.log("jj")
    )
    .catch((err) => console.log(err));
};

export const deleteEquipe = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/equipe/${id}`)
    .then((res) => dispatch(getEquipes()))
    .catch((err) => console.log(err));
};

export const updateEquipe = (id, updatedEquipe) => (dispatch) => {
  axios
    .put(`http://localhost:5000/equipe/${id}`, updatedEquipe)
    .then((res) => dispatch(getEquipes(), { payload: res.data }))
    .catch((err) => console.log(err));
};
