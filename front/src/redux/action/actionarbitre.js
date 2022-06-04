import { GET_ARBITRES, GET_ARBITRE_BYID } from "./actiontype";
import axios from "axios";

export const getArbitres = () => async (dispatch) => {
  await axios
    .get("http://localhost:5000/arbitre/")
    .then((res) => dispatch({ type: GET_ARBITRES, payload: res.data }))
    .catch((err) => console.log(err));
};

export const getArbitreByid = (id) => async (dispatch) => {
  await axios
    .get(`http://localhost:5000/arbitre/${id}`)
    .then((res) => dispatch({ type: GET_ARBITRE_BYID, payload: res.data }))
    .catch((err) => console.log(err));
};

export const AddArbitre = (newArbitre) => (dispatch) => {
  axios
    .post("http://localhost:5000/arbitre/add", newArbitre)

    .then((res) => dispatch({ type: GET_ARBITRES, payload: res.data }))
    .catch((err) => console.log(err));
};

export const deleteArbitre = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/arbitre/${id}`)
    .then((res) => dispatch(getArbitres()))
    .catch((err) => console.log(err));
};

export const updateArbitre = (id, updatedArbitre) => (dispatch) => {
  axios
    .put(`http://localhost:5000/arbitre/${id}`, updatedArbitre)
    .then((res) => dispatch(getArbitres(), { payload: res.data }))
    .catch((err) => console.log(err));
};
